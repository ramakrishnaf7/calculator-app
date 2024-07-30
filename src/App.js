import {useRef,useState} from 'react';
import './App.css';

function App() {

  const resultRef = useRef(null);
  const inputRef = useRef(null);
  const [result,setResult] = useState(0);
  
  const HandleAdd = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const HandleSub = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const HandleMul = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const HandleDiv = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const HandleResult = (e) => {
    e.preventDefault();
    setResult(0);
  };
  const HandleResultRef = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  return (
    <div>
      <h1 className='heading'> A simple Calculator App</h1>
      <form>
        <h4 ref = {resultRef}>Result = {result}</h4>
        <input 
        ref = {inputRef}
        pattern='[0-9]'
        type = "number"
        placeholder='type a number' />
        <button onClick = {HandleResult} className='App-button'>Reset Result</button>
        <button onClick= {HandleResultRef} className='App-button2'>Reset Input</button>
      </form>
        <button onClick={HandleAdd} className='App-button3'> ADDITION </button>
        <button onClick={HandleSub} className='App-button3'> SUBTRACT </button>
        <button onClick={HandleMul} className='App-button3'> MULTIPLY </button>
        <button onClick={HandleDiv} className='App-button3'> DIVISION </button>
        <button>Do Nothing</button>
    </div>
  );
}

export default App;
