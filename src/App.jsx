import React from "react";
import { CssBaseline } from "@mui/material";
import ToDoList from "./Components/ToDoList";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <CssBaseline />
      <ToDoList />
    </div>
  );
}

export default App;
