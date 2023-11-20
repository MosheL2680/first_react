import { useState } from 'react';
import './App.css';

function App() {
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  const [res, setRes] = useState(0);
  const calc = (opr) => { setRes(eval(`${n1} ${opr} ${n2}`)) }
  const color1 = { backgroundColor: `rgb(${res % 255},${res % 255},${res % 255})` }
  const color2 = { backgroundColor: `rgb(${res * 2 % 255},${res % 255},${res % 255})` }
  const color3 = { backgroundColor: `rgb(${res * 3 % 255},${res % 255},${res % 255})` }
  const color4 = { backgroundColor: `rgb(${res * 4 % 255},${res % 255},${res % 255})` }
  return (<div>
    <input onChange={(e) => setn1(e.target.value)} />
    <input onChange={(e) => setn2(e.target.value)} /><br />
    <button onClick={() => calc('+')} style={color1}>+</button>
    <button onClick={() => calc('-')} style={color2}>-</button>
    <button onClick={() => calc('*')} style={color3}>*</button>
    <button onClick={() => calc('/')} style={color4}>/</button>
    <h1>Result: {res}</h1>
  </div>)
} export default App;