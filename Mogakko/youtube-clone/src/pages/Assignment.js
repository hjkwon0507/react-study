import Layout from "../components/shared/Layout";
import { useState } from 'react';
import styles from '../components/shared/Assignment.module.css';

function Assignment() {
  const [value, setValue] = useState(true);

  function onClick() {
    setValue(!value);
  }

  return (
    <Layout>
      <div className={value ? styles.blue : styles.red}>
        {value 
          ? 'True에요!' 
          : 'False에요!'
        }
      </div>
      <button onClick={onClick}>색바꾸기!</button>
    </Layout>
  );
}

export default Assignment;