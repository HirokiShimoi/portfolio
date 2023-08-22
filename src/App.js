import './App.css';
import Header from './components/header.tsx';
import LanguageGrid from './components/language.tsx';
import Profile from './components/profile.tsx';
import Works from './components/works.tsx';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <Profile />
      <LanguageGrid />
      <Works/>
    </div>
  );
}

export default App;
