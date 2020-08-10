import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import HomeIcon from "@material-ui/icons/Home";
import TextsmsIcon from "@material-ui/icons/Textsms";
import Cell from "./Cell";
import "./App.css";

function App() {
  const [Result, setResult] = useState({
    Result1: "",
    Result2: "",
    Result3: "",
    Result4: "",
    Result5: "",
    Result6: "",
  });

  const handleChange = (e) => {
    setResult({ ...Result, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <p className="p">
        <HomeIcon color="secondary" style={{ fontSize: 40 }} /> 4 To 4 Family
        Game <HomeIcon color="secondary" style={{ fontSize: 40 }} />{" "}
      </p>
      <div className="board">
        <Cell Result={Result.Result1}></Cell>
        <Cell Result={Result.Result2}></Cell>
        <Cell Result={Result.Result3}></Cell>
        <Cell Result={Result.Result4}></Cell>
        <Cell Result={Result.Result5}></Cell>
        <Cell Result={Result.Result6}></Cell>
      </div>

      <div style={{ marginTop: 1300 }}>
        <p>
          <TextsmsIcon color="secondary" style={{ fontSize: 40 }}></TextsmsIcon>{" "}
          Input Your Choice!!!!{" "}
          <TextsmsIcon color="secondary" style={{ fontSize: 40 }}></TextsmsIcon>
        </p>

        <div>
          <TextField
            style={{ marginTop: 20 }}
            value={Result.Result1}
            id="outlined-basic"
            label="Choice1"
            variant="outlined"
            name="Result1"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            style={{ marginTop: 20 }}
            value={Result.Result2}
            id="outlined-basic"
            label="Choice2"
            variant="outlined"
            name="Result2"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            style={{ marginTop: 20 }}
            value={Result.Result3}
            id="outlined-basic"
            label="Choice3"
            variant="outlined"
            name="Result3"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            style={{ marginTop: 20 }}
            value={Result.Result4}
            id="outlined-basic"
            label="Choice4"
            variant="outlined"
            name="Result4"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            style={{ marginTop: 20 }}
            value={Result.Result5}
            id="outlined-basic"
            label="Choice5"
            variant="outlined"
            name="Result5"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            style={{ marginTop: 20 }}
            value={Result.Result6}
            id="outlined-basic"
            label="Choice6"
            variant="outlined"
            name="Result6"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
