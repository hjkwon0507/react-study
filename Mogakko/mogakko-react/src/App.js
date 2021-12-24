import Hello from './Hello';
import Button from './Button';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [merry, setMerry] = useState(0);

  function goodClick() {
    setGood(good + 1);
  };
  function badClick() {
    setBad(bad + 1);
  };
  function merryClick() {
    setMerry(merry + 1);
  };

  return (
    <div>
      <Hello />
      <Button goodClick={goodClick} badClick={badClick} merryClick={merryClick} good={good} bad={bad} merry={merry}  />
    </div>
  );
}

export default App;
