import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllPages from './pages/AllPages'
import Events from './pages/Events'
import History from './pages/History'
import Home from './pages/Home'
import Media from './pages/Media'
import Practice from './pages/Practice'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPages />}>
          <Route path="" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/practical" element={<Practice />} />
          <Route path="/history" element={<History />} />
          
        </Route>
      </Routes>
    </Router>
  );
}


export default App