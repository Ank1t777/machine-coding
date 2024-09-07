import { useState } from 'react';
import './App.css';

function App() {
  const buttonValues = [-100, -10, -1, +1, +10, +100];
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1); // Track history position for undo/redo

  const handleHistory = (btn, prevCounter, newCounter) => {
    console.log(`${btn}: ${prevCounter} -> ${newCounter}`);
    const obj = {
      key: Date.now(), // Unique key for each history entry
      btn,
      previousValue: prevCounter,
      currentValue: newCounter
    };
    setHistory(existingHistory => [obj, ...existingHistory]);
    setHistoryIndex(0); // Reset history index when a new action is performed
  };

  const handleChangeValue = (btn) => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + btn;
      handleHistory(btn, prevCounter, newCounter);
      return newCounter;
    });
  };

  const undo = () => {
    if (historyIndex < history.length - 1) {
      const entry = history[historyIndex + 1];
      setCounter(entry.previousValue);
      setHistoryIndex(historyIndex + 1);
    }
  };

  const redo = () => {
    if (historyIndex > 0) {
      const entry = history[historyIndex - 1];
      setCounter(entry.currentValue);
      setHistoryIndex(historyIndex - 1);
    }
  };

  return (
    <div className="counter--app">
      <h1>Undoable Counter</h1>
      <div className='counter--actions'>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
      {counter}
      <div className="user--actions">
        {
          buttonValues.map((btn, index) => (
            <button key={index} onClick={() => handleChangeValue(btn)}>
              {btn > 0 ? `+${btn}` : btn}
            </button>
          ))
        }
      </div>
      <div className="app--history">
        <span>History</span>
        {
          history.map(item => (
            <p key={item.key}>
              {item.btn}: {item.previousValue} -> {item.currentValue}
            </p>
          ))
        }
      </div>
    </div>
  );
}

export default App;
