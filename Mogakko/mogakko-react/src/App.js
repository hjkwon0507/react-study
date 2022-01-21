import {useState} from 'react';
import Button from './Button';
import Layout from './Layout';
import Gugudan from './Gugudan';
import styles from './App.module.css';

function App() {
  const [number, setNumber] = useState(1);
  const [isTrue, setIsTrue] = useState(false);

  function onClickIncrease(){
    setNumber(number+1);
  }
  function onClickDecrease(){
    setNumber(number-1);
  }
  function onClickMultiply(){
    setNumber(number*2);
  }
  function onClickToggle(){
    setIsTrue(!isTrue);
  }
  function onClickColor(){
    setIsTrue(!isTrue);
  }

  return (
    <Layout>
      <Gugudan number={number} />
      <Button onClick={onClickIncrease} text="+1" />
      <Button onClick={onClickDecrease} text="-1" />
      <Button onClick={onClickMultiply} text="*2" />
      <Button onClick={onClickToggle} text="True?" />
      {isTrue === true && <div>True!</div>}
      <Button onClick={onClickColor} text="True?" />
      <div className=
        {
          isTrue === true
          ? styles.red
          : styles.blue
        }
      >{
        isTrue === true
        ? 'True!'
        : 'False!'
      }
      </div>
    </Layout>
  );
}

export default App;
