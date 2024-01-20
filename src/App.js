import './App.css';
import LanguageGrid from './components/language.js';
import Profile from './components/profile.js';
import Works from './components/works.js';
import Contact from './components/contact';
import Experience from './components/experience.js';

function App() {
  return (
    <div className="App">

      <Profile />
      <Experience/>
      <LanguageGrid />
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
