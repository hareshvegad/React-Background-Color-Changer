import { useState } from "react";

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <>
      <div className="W-full h-screen duration-200" style={{backgroundColor: Color}}>
        <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 px-3 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => {setColor("red")}}>Red</button>
            <button className="outline-none px-4 px-3 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={() => {setColor("green")}}>Green</button>
            <button className="outline-none px-4 px-3 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => {setColor("blue")}}>Blue</button>
            <button className="outline-none px-4 px-3 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={() => {setColor("purple")}}>Purple</button>
            <button className="outline-none px-4 px-3 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}} onClick={() => {setColor("grey")}}>Grey</button>
            <button className="outline-none px-4 px-3 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "cyan"}} onClick={() => {setColor("cyan")}}>Cyan</button>
            <button className="outline-none px-4 px-3 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}} onClick={() => {setColor("black")}}>Black</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
