import React, { useEffect, useState } from "react";
import { db } from "../firebase";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { collection, getDocs } from "firebase/firestore";

const TodoItem = () => {
  const [todos, setTodos] = useState([
    {
      id: "",
      todo: "",
      date: "",
      progress: "",
    },
  ]);

  const q = collection(db, "todos");

  // 8/14 Firestoreからデータを取得できておらず、mapは走るけどデータが取得できていない

  useEffect(() => {
    getDocs(q).then((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Todo一覧</TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">期日</TableCell>
              <TableCell align="left">進捗度</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => {
              return (
                <TableRow key={todo.id}>
                  <TableCell>{todo.todo}</TableCell>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.date}</TableCell>
                  <TableCell>{todo.progress}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoItem;
