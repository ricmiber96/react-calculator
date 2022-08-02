import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


var history = ""


function App() {

  const [resum, setResum] = useState(0)
  const [result, setResult] = useState(0)

  const historyFunction = (operator) => {

    history = history + operator
    setResum(history)
  }

  const reset = () => {
    setResum(0)
    setResult(0)
    history = ""
  }

  const equalFunction = () => {
    console.log(resum);
    let equal = eval(resum)
    console.log(equal);
    setResult(equal)
  }

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
    <div className="w-96 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">

      <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
        <div className="text-gray-500 text-2xl">{resum}</div>
        <div className="text-black font-bold text-4xl">{result}</div>
      </div>

      <div className="w-auto m-1 h-auto mb-2">
        <div className="m-2 flex justify-between">
          <button className="btn-orange" onClick={()=> reset()}>C</button>
          <button className="btn-grey" onClick={()=>historyFunction("(")}>(</button>
          <button className="btn-grey" onClick={()=>historyFunction(")")}>)</button>
          <button className="btn-orange" onClick={()=>historyFunction("%")}>/</button>
        </div>

        <div className="m-2 flex justify-between">
          <button className="btn-grey" onClick={()=>historyFunction("7")}>7</button>
          <button className="btn-grey" onClick={()=>historyFunction("8")}>8</button>
          <button className="btn-grey" onClick={()=>historyFunction("9")}>9</button>
          <button className="btn-orange" onClick={()=>historyFunction("*")}>x</button>
        </div>

        <div className="m-2 flex justify-between">
          <button className="btn-grey" onClick={()=>historyFunction("4")}>4</button>
          <button className="btn-grey" onClick={()=>historyFunction("5")}>5</button>
          <button className="btn-grey" onClick={()=>historyFunction("6")}>6</button>
          <button className="btn-orange" onClick={()=>historyFunction("-")}>-</button>
        </div>

        <div className="m-2 flex justify-between">
          <button className="btn-grey" onClick={()=>historyFunction("1")}>1</button>
          <button className="btn-grey" onClick={()=>historyFunction("2")}>2</button>
          <button className="btn-grey" onClick={()=>historyFunction("3")}>3</button>
          <button className="btn-orange" onClick={()=>historyFunction("+")}>+</button>
        </div>

        <div className="m-2 flex justify-between">
          <button className="btn-grey-jumbo" onClick={()=>historyFunction("0")}>0</button>
          <div className="flex w-full ml-3 justify-between">
            <button className="btn-grey" onClick={()=>historyFunction(".")}>.</button>
            <button className="btn-green" onClick={()=>equalFunction()}>=</button>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div className="w-20 h-1 bg-red-100 rounded-l-xl rounded-r-xl"></div>
        </div>
        
      </div>
    </div>
  </div>
  );
}

export default App;
