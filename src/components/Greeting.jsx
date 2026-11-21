// Sample JavaScript / JSX component to demonstrate JS + TSX interoperability
export function Greeting({ name = "World" }) {
  return (
    <div style={{ padding: '0.75rem', margin: '0.5rem 0', background: '#f3f4f6', borderRadius: '8px', color: '#111827' }}>
      <strong>Hello from a JavaScript Component (.jsx)!</strong>
      <p>Welcome, {name}!</p>
    </div>
  );
}
