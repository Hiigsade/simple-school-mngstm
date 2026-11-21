import { InfoBox } from '../components/InfoBox.jsx';

export function Finance() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>Finance</h2>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '25px' }}>
        <InfoBox title="Total Revenue" count="$12,450" description="This term" />
        <InfoBox title="Pending Fees" count="$1,800" description="Unpaid" />
        <InfoBox title="Expenses" count="$4,200" description="Operating costs" />
      </div>

      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3>Recent Transactions</h3>
        <p style={{ color: '#64748b' }}>Overview of recent school fee payments and operating expenses.</p>
        <ul style={{ color: '#334155', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>Payment received: $300 - Grade 10 Tuition</li>
          <li>Payment received: $300 - Grade 11 Tuition</li>
          <li>Expense: $150 - Laboratory Equipment</li>
        </ul>
      </div>
    </div>
  );
}

export default Finance;
