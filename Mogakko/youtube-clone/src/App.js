import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import { useState } from 'react';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
}

export default App;