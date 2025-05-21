import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProverb } from '../api';

export default function AddProverb() {
  const [form, setForm] = useState({ textDari: '', textPashto: '', translationEn: '', meaning: '', category: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(val => val.trim() === '')) {
      alert("Please fill all fields");
      return;
    }
    addProverb(form).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['textDari', 'textPashto', 'translationEn', 'meaning', 'category'].map(field => (
        <input key={field} name={field} placeholder={field} className="w-full p-2 border" onChange={handleChange} />
      ))}
      <button className="bg-green-600 text-white px-4 py-2 rounded">Add Proverb</button>
    </form>
  );
}