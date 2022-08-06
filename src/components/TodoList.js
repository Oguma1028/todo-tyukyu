import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Select, Button } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const TodoList = () => {
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {
    setProgress(e.target.value);
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <Typography>TODO:</Typography>
            <TextField variant="outlined" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>期日:</Typography>
            <TextField variant="outlined" />
          </Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>進捗度</InputLabel>
            <Select value={progress} label="Age" onChange={handleChange}>
              <MenuItem value={"未着手"}>未着手</MenuItem>
              <MenuItem value={"着手"}>着手</MenuItem>
              <MenuItem value={"完了"}>完了</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
};

export default TodoList;
