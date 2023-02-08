import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["ToDo", "App"]);

  const [text, setText] = useState("");

  let add = () => {
    arr.push(text);
    console.log(arr);
    setArr([...arr]);
  };

  let delet = () => {
    arr.splice(text);
    console.log(arr);
    setText([...arr]);
  };

 
  let del = (i) => {
    arr.splice(i , 1);
    console.log(arr);
    setArr([...arr]);
  };

  let edit = (i)=>{
    // get prompt
    let a = prompt("enter value", arr[i]);
    // arr[i] == prompt value
    arr[i] = a;
    // set State of Array
    setArr([...arr]);
  }

  

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <header className="App-header">
      {arr.map((x, i) => (
          <p>{x} <button className="but" onClick={()=>del(i)}>delet</button> <button className="but" onClick={()=>edit(i)}>edit</button></p>
        ))}
        
        
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter Text"
        /> 
          
         
        <p>{text}</p>
        
        <p> <button className="but" onClick={add}>Add</button>  <button className="but" onClick={()=>delet()}>all delet</button></p>
      </header>
    </div>
  );
}

export default App;