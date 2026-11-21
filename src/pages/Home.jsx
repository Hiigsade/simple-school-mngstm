import { InfoBox } from '../components/InfoBox.jsx';

export function Home() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>Home Dashboard</h2>
      
      {/* Four boxes reusing the single InfoBox component */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
        <InfoBox title="Total Students" count="150" description="Registered students" />
        <InfoBox title="Total Teachers" count="12" description="Teaching staff" />
        <InfoBox title="Total Classes" count="8" description="Active classrooms" />
        <InfoBox title="Total Courses" count="24" description="Available courses" />
      </div>

      <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3>Welcome to the School Portal</h3>
        <p style={{ color: '#64748b' }}>
          This is the Home page displaying summary boxes created from one reusable component.
        </p>
      </div>
    </div>
  );
}

export default Home;
