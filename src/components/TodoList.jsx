import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Select } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {
    setProgress(e.target.value);
    console.log(progress);
  };
  const todoHandle = (event) => {
    setTodo(event.target.value);
    console.log(todo);
  };
  const dateHandle = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const colectionRef = collection(db, "todos");
    const data = {
      todo,
      date,
      progress,
    };

    addDoc(colectionRef, data);
  };

  return (
    <>
      <Box>
        <Box component="form" sx={{ display: "flex" }} onSubmit={handleSubmit}>
          <Box sx={{ display: "flex" }}>
            <Typography>TODO:</Typography>
            <TextField variant="outlined" onChange={todoHandle} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>期日:</Typography>
            <TextField variant="outlined" onChange={dateHandle} />
          </Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>進捗度</InputLabel>
            <Select
              value={progress}
              label="Age"
              defaultValue="未着手"
              onChange={handleChange}
            >
              <MenuItem value="未着手">未着手</MenuItem>
              <MenuItem value="着手">着手</MenuItem>
              <MenuItem value="完了">完了</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            追加
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TodoList;
