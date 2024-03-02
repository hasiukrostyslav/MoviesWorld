import { Link } from 'react-router-dom';

interface LogoProps {
  type: 'dark' | 'light';
  size: 'base' | 'lg';
  className?: string;
}

function Logo({ type, size, className }: LogoProps) {
  return (
    <Link
      to="/"
      className={`font-logo ${type === 'light' ? 'text-slate-300' : 'text-slate-500'} ${size === 'base' ? 'text-3xl' : 'text-5xl'} ${className}`}
    >
      <span className="text-blue-600">M</span>
      oviesWorld
    </Link>
  );
}

export default Logo;
