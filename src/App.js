import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LanguageGrid from './components/language.js';
import Profile from './components/profile.js';
import Works from './components/works.js';
import Contact from './components/contact';
import Experience from './components/experience.js';
import ImageList from './components/imagelist.js';
import HomePage from './Pages/HomePage.js';

function App() {
    return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/imagelist" element={<ImageList />} />
                {/* 他のルート */}
            </Routes>
        </div>
      </Router>
    );
    }  

export default App;
