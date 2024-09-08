import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [food, setFood] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handleChange = (e) => {
    setFood(e.target.value);
  };

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    // console.log(data);
    setSuggestion(data);
  };

  useEffect(() => {
    if (food.length >= 2) {
      fetchItems(food);
    }
  }, [food]);

  const handleShoppingList = (e) => {
    const index = e.target.getAttribute("data-id");
    if (index) {
      const itemObj = {
        id: Date.now(),
        data: suggestion[index],
        isDone: false,
      };
      const copyBucketList = [...bucketList]; /*because we don't
      to mess with the bucketlist as it will change if real */
      copyBucketList.push(itemObj);
      setBucketList(copyBucketList);
    }
    setFood("");
  };
  //console.log(bucketList);

  const handleSelectBucket = (itemId) => {
    setBucketList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDeleteBucket = (itemId) => {
    setBucketList((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <input
        value={food}
        onChange={handleChange}
        className="app--search--input"
        type="text"
        name="search"
        id="search"
        placeholder="search"
      />
      {food.length >= 2 ? (
        <div onClick={handleShoppingList} className="app--auto--suggestion">
          {suggestion.map((item, index) => {
            return (
              <div key={index} data-id={index} className="suggested--items">
                {item}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="app--bucket--list">
        {bucketList.map((item) => {
          return (
            <div key={item.id} className="bucket--item">
              <button
                onClick={() => handleSelectBucket(item.id)}
                className="bucket--select"
              >
                ✓
              </button>
              <span className={item.isDone ? "strike" : ""}>{item.data}</span>
              <button
                onClick={() => handleDeleteBucket(item.id)}
                className="bucket--delete"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
