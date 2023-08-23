import './App.css';
import LanguageGrid from './components/language.js';
import Profile from './components/profile.js';
import Works from './components/works.js';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">

      <Profile />
      <LanguageGrid />
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
