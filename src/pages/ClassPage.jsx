export function ClassPage() {
  const handleButtonClick = () => {
    alert("Button clicked! Class alert triggered via onClick.");
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>Class Management</h2>

      <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
        <p style={{ color: '#475569', marginBottom: '16px' }}>
          Click the button below to trigger an alert using the <code>onClick</code> event.
        </p>

        {/* Button with onClick alert */}
        <button
          onClick={handleButtonClick}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '15px',
            cursor: 'pointer'
          }}
        >
          Click Me (onClick Alert)
        </button>
      </div>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3>Class List</h3>
        <ul style={{ color: '#334155', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>Class 1 - Grade 10 A</li>
          <li>Class 2 - Grade 10 B</li>
          <li>Class 3 - Grade 11 A</li>
          <li>Class 4 - Grade 12 Science</li>
        </ul>
      </div>
    </div>
  );
}

export default ClassPage;
