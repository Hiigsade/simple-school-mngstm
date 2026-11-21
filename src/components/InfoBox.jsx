// Reusable Box/Card Component
export function InfoBox({ title, count, description }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      minWidth: '180px',
      flex: '1',
      textAlign: 'center'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#64748b', fontSize: '15px' }}>{title}</h4>
      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b' }}>{count}</div>
      {description && <div style={{ marginTop: '8px', fontSize: '13px', color: '#94a3b8' }}>{description}</div>}
    </div>
  );
}
