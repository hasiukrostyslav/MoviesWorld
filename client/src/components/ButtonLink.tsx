import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  children: React.ReactNode;
  path: string;
  color: 'primary' | 'secondary' | 'outline' | 'transparent';
}

const buttonColors = {
  primary:
    'border-blue-600 bg-blue-600 text-slate-100 hover:border-blue-700 hover:bg-blue-700',
  secondary: '',
  outline: 'border-slate-300 hover:border-slate-100 hover:text-slate-100',
  transparent: 'border-0 text-blue-500 font-semibold hover:bg-blue-100',
};

function ButtonLink({ children, path, color }: ButtonLinkProps) {
  return (
    <Link
      className={`rounded-lg border px-4 py-2 text-sm transition-all duration-200 ${buttonColors[color]}`}
      to={path}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
