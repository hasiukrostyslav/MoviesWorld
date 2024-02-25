import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="font-logo text-3xl text-slate-300">
      <span className="text-blue-600">M</span>
      oviesWorld
    </Link>
  );
}

export default Logo;
