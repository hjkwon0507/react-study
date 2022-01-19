import {useState} from 'react';
import Button from './Button';
import Layout from './Layout';
import Gugudan from './Gugudan';

function App() {
  const [number, setNumber] = useState(1);

  function onClickIncrease(){
    setNumber(number+1);
  }
  function onClickDecrease(){
    setNumber(number-1);
  }
  function onClickMultiply(){
    setNumber(number*2);
  }

  return (
    <Layout>
      <Gugudan number={number} />
      <Button onClick={onClickIncrease} text="+1" />
      <Button onClick={onClickDecrease} text="-1" />
      <Button onClick={onClickMultiply} text="*2" />
    </Layout>
  );
}

export default App;
