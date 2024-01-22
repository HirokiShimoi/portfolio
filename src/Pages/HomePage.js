import React from 'react';
import Profile from '../components/profile';
import Experience from '../components/experience';
import Works from '../components/works';
import LanguageGrid from '../components/language';
import Contact from '../components/contact';

function HomePage() {
  return (
    <div>
      <Profile />
      <Experience />
      <Works />
      <LanguageGrid />
      <Contact />
    </div>
  );
}

export default HomePage;