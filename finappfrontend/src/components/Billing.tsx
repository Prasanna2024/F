import React, { useMemo, useState } from 'react';
import List from './List';

function Billing() {
  const [input, setInput] = useState(0);
  const [theme, setTheme] = useState(false);
  const doubleit: number = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) { }
    return Number(input * 2)
  }, [input])
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value));
  };

  const themeHandler = () => {
    // Use a callback function to correctly update the state based on the previous state
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <>
      <div className="bill" style={{ height: '100vh', width: '100%', backgroundColor: 'grey', display: 'flex' }}>
        <div className="bill_container" style={{ height: '500px', width: '500px', backgroundColor: theme ? 'white' : 'black' }}>
          <input type="number" value={input} onChange={(e) => inputHandler(e)} />
          <button onClick={themeHandler} style={{ margin: '10px' }}>Themechanger</button>
          <List input={input} />
          {doubleit}
        </div>
      </div>
    </>
  );
}

export default Billing;

