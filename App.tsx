
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import LibraryCatalogue from './components/LibraryCatalogue';
import NewArrivals from './components/NewArrivals';
import AudioBooks from './components/AudioBooks';
import Magazines from './components/Magazines';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LANDING);

  const navigate = (target: ViewState) => setView(target);

  return (
    <div className="antialiased min-h-screen bg-slate-50 text-slate-900">
      {view === ViewState.LANDING && (
        <LandingPage onEnter={() => setView(ViewState.HOME)} />
      )}
      {view === ViewState.HOME && (
        <HomePage 
          onNavigate={navigate} 
        />
      )}
      {view === ViewState.CATALOGUE && (
        <LibraryCatalogue 
          onBack={() => setView(ViewState.HOME)} 
          onGoToNewArrivals={() => setView(ViewState.NEW_ARRIVAL)}
          onNavigate={navigate}
        />
      )}
      {view === ViewState.NEW_ARRIVAL && (
        <NewArrivals onBack={() => setView(ViewState.CATALOGUE)} onNavigate={navigate} />
      )}
      {view === ViewState.AUDIO_BOOKS && (
        <AudioBooks onBack={() => setView(ViewState.HOME)} />
      )}
      {view === ViewState.MAGAZINES && (
        <Magazines onBack={() => setView(ViewState.HOME)} />
      )}
      {view === ViewState.CONTACT_US && (
        <ContactUs onBack={() => setView(ViewState.HOME)} />
      )}
      {view === ViewState.ABOUT_US && (
        <AboutUs onBack={() => setView(ViewState.HOME)} />
      )}
    </div>
  );
};

export default App;
