import { useEffect, useState } from 'react';
import { getAllProverbs } from '../api';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    getAllProverbs().then(res => setProverbs(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">All Proverbs</h1>
      <div className="grid gap-4">
        {proverbs.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <p><strong>Dari:</strong> {p.textDari}</p>
            <p><strong>Pashto:</strong> {p.textPashto}</p>
            <p><strong>English:</strong> {p.translationEn}</p>
            <p><strong>Category:</strong> {p.category}</p>
            <Link to={`/proverbs/${p.id}`} className="text-blue-600 underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}