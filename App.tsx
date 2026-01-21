
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hosting from './pages/Hosting';
import Community from './pages/Community';
import Ranks from './pages/Ranks';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/panel" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
