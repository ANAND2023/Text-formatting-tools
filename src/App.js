import { useState } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Textarea } from "./Textarea";
import { Exchange } from "./Exchange";




function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#050844";
      document.body.style.color = "white";
    }
  };

  const toggleGreen = () => {
    if (mode === "light" || document.body.style.backgroundColor === "red" || document.body.style.backgroundColor === "blue" || document.body.style.backgroundColor === "#050844"){
      console.log("hello12");
      setMode("dark");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      console.log("hello1");
    }
  };
  const toggleRed = () => {
    if (mode === "light" || document.body.style.backgroundColor === "green" || document.body.style.backgroundColor === "blue" || document.body.style.backgroundColor === "#050844") {
      console.log("hello12");
      setMode("dark");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      console.log("hello1");
    }
  };
  const toggleBlue = () => {
    if (mode === "light" || document.body.style.backgroundColor === "green" || document.body.style.backgroundColor === "red" || document.body.style.backgroundColor === "#050844") {
      console.log("hello12");
      setMode("dark");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      console.log("hello1");
    }
  };
  const toggleDark = () => {
    if (mode === "light" || document.body.style.backgroundColor === "green" || document.body.style.backgroundColor === "red") {
      console.log("hello12");
      setMode("dark");
      document.body.style.backgroundColor = "#050844";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      console.log("hello1");
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen} toggleRed={toggleRed} toggleBlue={toggleBlue} toggleDark={toggleDark}/>
      <Textarea mode={mode} />
      {/* <Exchange/> */}
    </>
  );
}

export default App;
