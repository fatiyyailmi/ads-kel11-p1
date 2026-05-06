import './App.css'
import { Routes, Route } from 'react-router-dom';

import DashboardMhs from './pages/mahasiswa/DashboardMhs';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route
          path="/"
          element={<DashboardMhs />}
        />
      </Routes>
    </div>
  );
}

export default App;
