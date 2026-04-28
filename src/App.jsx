import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MinecraftPage from './pages/MinecraftPage';
import Accessibility from './pages/Accessibility';

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('language');

    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage language={language} setLanguage={setLanguage} />}
      />
      <Route
        path="/minecraft"
        element={<MinecraftPage language={language} setLanguage={setLanguage} />}
      />
      <Route
        path="/accessibility"
        element={<Accessibility language={language} setLanguage={setLanguage} />}
      />
    </Routes>
  );
}

export default App;
