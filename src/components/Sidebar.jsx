import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const navStyle = ({ isActive }) => ({
    display: 'block',
    padding: '12px 20px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: isActive ? 700 : 500,
    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.25)' : 'transparent',
    borderLeft: isActive ? '4px solid #ffffff' : '4px solid transparent',
    transition: 'background-color 0.2s',
  });

  return (
    <aside style={{
      width: '220px',
      minHeight: '100vh',
      backgroundColor: '#dc2626',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '2px 0 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        padding: '24px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        fontSize: '18px',
        fontWeight: 'bold',
        letterSpacing: '0.5px'
      }}>
        School Portal
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
        <NavLink to="/students" style={navStyle}>
          Students
        </NavLink>
        <NavLink to="/home" style={navStyle}>
          Home
        </NavLink>
        <NavLink to="/class" style={navStyle}>
          Class
        </NavLink>
        <NavLink to="/finance" style={navStyle}>
          Finance
        </NavLink>
        <NavLink to="/staff" style={navStyle}>
          Staff
        </NavLink>
        <NavLink to="/registration" style={navStyle}>
          Registration
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
