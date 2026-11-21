import { useState } from 'react';

export function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Student'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Details:\nName: ${formData.fullName}\nEmail: ${formData.email}\nRole: ${formData.role}`);
    setFormData({ fullName: '', email: '', role: 'Student' });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>Registration</h2>

      <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0', maxWidth: '500px' }}>
        <h3>New Registration Form</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Staff">Staff</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 16px',
              backgroundColor: '#ef4444',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
