import { Link } from 'react-router-dom';
import { useMatchTheme } from '../hooks/useMatchTheme';

interface LogoProps {
  size: 'base' | 'lg';
  className?: string;
}

function Logo({ size, className }: LogoProps) {
  const match = useMatchTheme();

  return (
    <Link
      to="/"
      className={`outline-round p-1 font-logo ${size === 'base' ? 'z-20 text-3xl' : 'text-5xl'} ${className} ${match ? 'text-slate-200' : 'text-slate-500 dark:text-slate-200'}`}
    >
      <span className="text-blue-600">M</span>
      oviesWorld
    </Link>
  );
}

export default Logo;
