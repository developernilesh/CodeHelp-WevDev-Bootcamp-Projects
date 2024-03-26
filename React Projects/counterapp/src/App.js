import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }

  function incrementHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div>
        <h2 className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</h2>
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-md text-[25px] text-[#344151]">
        <button onClick={decrementHandler}
        className="border-r-2 text-center w-20 boder-[#bfbfbf] text-5xl"
        > - </button>

        <div className="font-bold text-5xl">{count}</div>

        <button onClick={incrementHandler}
        className="border-l-2 text-center w-20 boder-[#bfbfbf] text-5xl"
        > + </button>
      </div>

      <button onClick={resetHandler}
      className="bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg"
      >Reset</button>
    </div>
  );
}

export default App;
