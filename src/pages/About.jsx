// About Page written in pure JavaScript (.jsx)
export function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1.5rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>About This Project</h1>
      <p>
        This page is implemented in <code>About.jsx</code> using pure JavaScript, demonstrating that both
        TypeScript (<code>.tsx</code>) and JavaScript (<code>.jsx</code>) routes can co-exist within the same Vite + React application.
      </p>
      <div style={{ background: '#e0f2fe', padding: '1rem', borderRadius: '8px', border: '1px solid #bae6fd' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#0369a1' }}>Features Configured:</h3>
        <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#0c4a6e' }}>
          <li>Vite Fast Refresh & HMR</li>
          <li>TypeScript + TSX support</li>
          <li>Full JavaScript & JSX interoperability via <code>"allowJs": true</code></li>
          <li>React Router (<code>react-router-dom</code>) routing configured</li>
        </ul>
      </div>
    </div>
  );
}



