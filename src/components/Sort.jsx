import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const Sort = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <Typography>id:</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>進捗度</InputLabel>
            <Select label="Age">
              <MenuItem value={"未着手"}>未着手</MenuItem>
              <MenuItem value={"着手"}>着手</MenuItem>
              <MenuItem value={"完了"}>完了</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography>期限:</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>進捗度</InputLabel>
            <Select label="Age">
              <MenuItem value={"未着手"}>未着手</MenuItem>
              <MenuItem value={"着手"}>着手</MenuItem>
              <MenuItem value={"完了"}>完了</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography>状況:</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>進捗度</InputLabel>
            <Select label="Age">
              <MenuItem value={"未着手"}>未着手</MenuItem>
              <MenuItem value={"着手"}>着手</MenuItem>
              <MenuItem value={"完了"}>完了</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Sort;
