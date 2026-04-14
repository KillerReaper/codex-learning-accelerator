import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MinecraftPage from './pages/MinecraftPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/minecraft" element={<MinecraftPage />} />
    </Routes>
  );
}

export default App;
