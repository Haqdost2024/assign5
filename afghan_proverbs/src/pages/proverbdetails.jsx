import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProverb, deleteProverb } from '../api';

export default function ProverbDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proverb, setProverb] = useState(null);

  useEffect(() => {
    getProverb(id).then(res => setProverb(res.data));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this proverb?")) {
      deleteProverb(id).then(() => navigate('/'));
    }
  };

  if (!proverb) return <p>Loading...</p>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Proverb Details</h2>
      <p><strong>Dari:</strong> {proverb.textDari}</p>
      <p><strong>Pashto:</strong> {proverb.textPashto}</p>
      <p><strong>English:</strong> {proverb.translationEn}</p>
      <p><strong>Meaning:</strong> {proverb.meaning}</p>
      <p><strong>Category:</strong> {proverb.category}</p>
      <div className="space-x-2 mt-4">
        <Link to={`/edit/${proverb.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</Link>
        <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}