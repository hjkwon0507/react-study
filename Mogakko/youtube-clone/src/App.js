import './App.css';
import Layout from './components/shared/Layout';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(false);

  function onClick() {
    setValue(!value);
  }

  return (
    <Layout>
      <div>콘텐츠!</div>
    </Layout>
  );
}

export default App;