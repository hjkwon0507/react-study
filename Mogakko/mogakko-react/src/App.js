import {useState} from 'react';
import Button from './Button';
import Layout from './Layout';
import Gugudan from './Gugudan';
import styles from './App.module.css';

function App() {
  const [number, setNumber] = useState(1);
  const [isTrue, setIsTrue] = useState(false);
  const [isBlue, setIsBlue] = useState(false);

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
    setIsBlue(!isBlue);
  }

  return (
    <Layout>
      <Gugudan number={number} />
      <Button onClick={onClickIncrease} text="+1" />
      <Button onClick={onClickDecrease} text="-1" />
      <Button onClick={onClickMultiply} text="*2" />
      <Button onClick={onClickToggle} text="True?" />
      {isTrue === true && <div>True!</div>}
      <Button onClick={onClickColor} text="색 바꾸기" />
      <div className=
        {
          isBlue === true
          ? styles.blue
          : styles.red
        }
      >{
        isBlue === true
        ? 'True!'
        : 'False!'
      }
      </div>
    </Layout>
  );
}

export default App;
