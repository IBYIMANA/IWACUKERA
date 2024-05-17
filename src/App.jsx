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
import LayoutAdmin from './pages/LayoutAdmin';
import Med from './pages/Med';
import Proverb from './pages/Proverb';
import Activity from './pages/Activity';
import Dashboard from './pages/Dashboard';
import AddProverb from './pages/AddProverb';
import AddEvent from './pages/AddEvent';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for the main website */}
        <Route path="/" element={<AllPages />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="media" element={<Media />} />
          <Route path="practical" element={<Practice />} />
          <Route path="history" element={<Museum />} />
          <Route path="history/museum" element={<Museum />} />
          <Route path="history/abami" element={<Abami />} />
          <Route path="history/imigani" element={<Imigani />} />
          <Route path="history/imikino" element={<Imikino />} />
          <Route path="auth/adminLogin" element={<AdminLogin />} />
        </Route>

        {/* Routes for the admin panel */}
        <Route path="/" element={<LayoutAdmin />}>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="med" element={<Med />} />
          <Route path="proverb" element={<Proverb />} />
          <Route path="activity" element={<Activity />} />
          <Route path="addproverb" element={<AddProverb />} />
          <Route path="addevent" element={<AddEvent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
