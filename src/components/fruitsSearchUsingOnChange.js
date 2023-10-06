import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [fruitsList, setFruitsList] = useState([
    "Apple",
    "Pineapple",
    "Banana",
    "Mango",
  ]);
  const [searchVal, setSearchVal] = useState();
  console.log(searchVal);

  function handleSearchClick() {
    if (searchVal === "") {
      setFruitsList(fruitsList);
      return;
    }

    const filterBySearch = fruitsList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setFruitsList(filterBySearch);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <input
        type="text"
        onChange={(e) => setSearchVal(e.target.value)}
        value={searchVal}
      />
      <button onClick={handleSearchClick}>Search</button>
      <div>
        {fruitsList.map((fruits) => {
          return <div>{fruits}</div>;
        })}
      </div>
    </div>
  );
}
