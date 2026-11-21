import { useState } from 'react';
import { InfoBox } from '../components/InfoBox.jsx';

export function Students() {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [age, setAge] = useState('');

  const [studentList, setStudentList] = useState([
    { id: 1, name: 'Ali Ahmed', class: 'Grade 10', age: 16, status: 'Active' },
    { id: 2, name: 'Fatima Omar', class: 'Grade 11', age: 17, status: 'Active' },
    { id: 3, name: 'Hassan Jama', class: 'Grade 10', age: 16, status: 'Active' },
    { id: 4, name: 'Amina Farah', class: 'Grade 12', age: 18, status: 'Active' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentClass || !age) {
      alert('Please fill out all fields: Name, Class, and Age.');
      return;
    }

    // Trigger alert using onsubmit with name, class, age
    alert(`Student Information Submitted:\nName: ${name}\nClass: ${studentClass}\nAge: ${age}`);

    // Add to local state list
    setStudentList([
      ...studentList,
      {
        id: studentList.length + 1,
        name: name,
        class: studentClass,
        age: Number(age),
        status: 'Active'
      }
    ]);

    // Reset inputs
    setName('');
    setStudentClass('');
    setAge('');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>Student Management</h2>

      {/* 3 boxes matching the dashboard in the photo */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '25px' }}>
        <InfoBox title="Total Students" count={studentList.length.toString()} />
        <InfoBox title="Active Students" count={studentList.length.toString()} />
        <InfoBox title="Classes" count="13" />
      </div>

      {/* Form with onsubmit event */}
      <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '25px' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#334155' }}>Add New Student</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
              Student Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', minWidth: '180px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
              Class
            </label>
            <input
              type="text"
              placeholder="e.g. Grade 10"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
              style={{ padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', minWidth: '150px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
              Age
            </label>
            <input
              type="number"
              placeholder="e.g. 16"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              style={{ padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', width: '100px' }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '9px 20px',
              backgroundColor: '#ef4444',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Add Student (onSubmit Alert)
          </button>
        </form>
      </div>

      {/* Student List Table */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#334155' }}>Student List</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '14px' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Name</th>
              <th style={{ padding: '10px' }}>Class</th>
              <th style={{ padding: '10px' }}>Age</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((s) => (
              <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155' }}>
                <td style={{ padding: '10px' }}>#{s.id}</td>
                <td style={{ padding: '10px', fontWeight: 500 }}>{s.name}</td>
                <td style={{ padding: '10px' }}>{s.class}</td>
                <td style={{ padding: '10px' }}>{s.age}</td>
                <td style={{ padding: '10px' }}>
                  <span style={{ background: '#dcfce7', color: '#15803d', padding: '3px 8px', borderRadius: '12px', fontSize: '12px' }}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
