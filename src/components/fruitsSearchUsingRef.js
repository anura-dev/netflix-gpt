import React, { useState, useRef } from "react";
import "./style.css";

export default function App() {
  const [fruitsList, setFruitsList] = useState([
    "Apple",
    "Pineapple",
    "Banana",
    "Mango",
  ]);
  const searchVal = useRef();

  function handleSearchClick() {
    if (searchVal.current.value === "") {
      setFruitsList(fruitsList);
      return;
    }
    console.log(searchVal.current.value);
    const filterBySearch = fruitsList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.current.value.toLowerCase())) {
        return item;
      }
    });
    setFruitsList(filterBySearch);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <input type="text" ref={searchVal} />
      <button onClick={handleSearchClick}>Search</button>
      <div>
        {fruitsList.map((fruits) => {
          return <div>{fruits}</div>;
        })}
      </div>
    </div>
  );
}
