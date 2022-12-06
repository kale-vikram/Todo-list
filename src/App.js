import React, { useState } from "react";
function App() {
  const [inputVal, setInputVal] = useState("");
  const [inputArr, setInputArr] = useState([]);

  const addItems = () => {
    if (!inputVal) {
      alert("Please give some input");
    } else {
      setInputArr([...inputArr, inputVal]);
      setInputVal("");
    }
  };
  const DeletItem = (id) => {
    const newArr = inputArr.filter((val, ind) => {
      return id !== ind;
    });
    setInputArr(newArr);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div>
          Todo List  <br />
          <input
            type="text"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <button onClick={addItems}>Submit</button>
        </div>
        <div>
          <ul>{
            inputArr.map((val,ind)=>{
                 return <li>{val} <button onClick={()=>DeletItem(ind)}>Delet</button></li>
            })

          }</ul>
        </div>
      </div>
    </>
  );
}

export default App;
