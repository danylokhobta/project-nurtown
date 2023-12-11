import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Certification from './pages/Certification';
import Contacts from './pages/Contacts';

const AppRouter = () => {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
  );
}

export default AppRouter;