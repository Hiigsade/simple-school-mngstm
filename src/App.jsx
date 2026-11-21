import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Students from './pages/Students.jsx';
import Home from './pages/Home.jsx';
import ClassPage from './pages/ClassPage.jsx';
import Finance from './pages/Finance.jsx';
import Staff from './pages/Staff.jsx';
import Registration from './pages/Registration.jsx';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <header style={{
            background: '#ffffff',
            padding: '16px 30px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h1 style={{ margin: 0, fontSize: '20px', color: '#0f172a' }}>Telesom Academy Dashboard</h1>
            <span style={{ fontSize: '14px', color: '#64748b' }}>Status: Default Access (No login required)</span>
          </header>

          <main style={{ padding: '30px', flex: 1 }}>
            {/* Routes - Cleanly importing each page component */}
            <Routes>
              <Route path="/" element={<Navigate to="/students" replace />} />
              <Route path="/students" element={<Students />} />
              <Route path="/home" element={<Home />} />
              <Route path="/class" element={<ClassPage />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
