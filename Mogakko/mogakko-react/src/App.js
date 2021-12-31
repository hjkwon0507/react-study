import Hello from './Hello';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState(true);

  function onClick() {
    setValue(!value);
  }

  return (
    <div>
      <div className={value ? styles.blue : styles.red}>
        {value 
          ? 'True에요!' 
          : 'False에요!'
        }
      </div>
      <button onClick={onClick}>색바꾸기!</button>
    </div>
  );
}

export default App;
