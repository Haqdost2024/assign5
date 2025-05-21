import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProverb, updateProverb } from '../api';

export default function EditProverb() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getProverb(id).then(res => setForm(res.data));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(val => val.trim() === '')) {
      alert("Please fill all fields");
      return;
    }
    updateProverb(id, form).then(() => navigate(`/proverbs/${id}`));
  };

  if (!form) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['textDari', 'textPashto', 'translationEn', 'meaning', 'category'].map(field => (
        <input key={field} name={field} value={form[field]} className="w-full p-2 border" onChange={handleChange} />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Update Proverb</button>
    </form>
  );
}