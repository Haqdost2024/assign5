import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold">Afghan Proverbs</Link>
      <Link to="/add" className="bg-white text-blue-600 px-4 py-1 rounded">Add Proverb</Link>
    </nav>
  );
}