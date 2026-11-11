import { useState } from "react";
import "./App.css";

function App() {
  const[count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return +saved ? +saved : 0;
  });


  function handleAdd() {
  
    setCount(prevCount => prevCount + 1);
    localStorage.setItem("count", count + 1);
  }

  function handleClear() {
    setCount(0);
    localStorage.removeItem("count");
  }

  return (
      <div className="w-100 h-100 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-5 my-15">
        <img src="/bg.png" alt="Jabana Logo" className="size-40" />
        <h1 className="text-5xl font-bold text-[#bc8b62]">Jabana Counter</h1>
          <p className="text-xl font-bold text-[#bc8b62]">Number of jabanas: <span className="text-2xl font-bold text-[#a2693b]">{localStorage.getItem("count") ? localStorage.getItem("count") : count}</span></p>
        </div>
        <div className="flex gap-15">
          <button className="w-40 bg-[#bc8b62] text-white font-bold py-3 rounded hover:bg-[#b1885e] cursor-pointer" onClick={() => handleAdd()}>
            Add Jabana
          </button>
          <button className="w-40 bg-[#bc8b62] text-white font-bold py-3 px-6 rounded hover:bg-[#b1885e] cursor-pointer" onClick={() => handleClear()}>
            Clear Count
          </button>
        </div>
      </div>
  );
}

export default App;
