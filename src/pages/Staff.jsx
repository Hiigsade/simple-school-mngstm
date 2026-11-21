export function Staff() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>Staff Management</h2>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
        <h3>School Staff Members</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '12px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b' }}>
              <th style={{ padding: '8px' }}>Name</th>
              <th style={{ padding: '8px' }}>Role</th>
              <th style={{ padding: '8px' }}>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '8px' }}>Mr. Mohamed Nur</td>
              <td style={{ padding: '8px' }}>Principal</td>
              <td style={{ padding: '8px' }}>Administration</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '8px' }}>Ms. Hawa Yusuf</td>
              <td style={{ padding: '8px' }}>Teacher</td>
              <td style={{ padding: '8px' }}>Mathematics</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '8px' }}>Mr. Abdi Warsame</td>
              <td style={{ padding: '8px' }}>Teacher</td>
              <td style={{ padding: '8px' }}>Science</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Staff;
