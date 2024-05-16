import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPages from './pages/AllPages';
import Events from './pages/Events';
import Home from './pages/Home';
import Media from './pages/Media';
import Practice from './pages/Practice';
import Museum from './pages/Museum';
import Abami from './pages/Abami';
import Imigani from './pages/Imigani';
import Imikino from './pages/Imikino';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AllPages />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/practical" element={<Practice />} />
          <Route path="/history" element={<Museum />} />
          <Route path="/history/museum" element={<Museum />} />
          <Route path="/history/abami" element={<Abami />} />
          <Route path="/history/imigani" element={<Imigani />} />
          <Route path="/history/imikino" element={<Imikino />} />
          <Route path="/auth/adminLogin" element={<AdminLogin />} />
        </Route>
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
