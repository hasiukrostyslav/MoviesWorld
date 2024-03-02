import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  children: React.ReactNode;
  path: string;
  color: 'primary' | 'secondary' | 'outline' | 'transparent';
}

const buttonColors = {
  primary:
    'border-blue-600 bg-blue-600 text-slate-100 hover:border-blue-700 hover:bg-blue-700 ring-blue-300 border-2',
  secondary: '',
  outline:
    'dark:border-slate-300 border-blue-600 dark:hover:border-slate-100  hover:border-blue-400 text-blue-600 dark:text-slate-300 dark:hover:text-slate-100 hover:text-blue-400 ring-blue-500 dark:focus:border-blue-500 focus:border-blue-500 border-2',
  transparent: 'border-0 text-blue-500 font-semibold hover:bg-blue-100',
};

function ButtonLink({ children, path, color }: ButtonLinkProps) {
  return (
    <Link
      className={`rounded-lg px-4 py-2 text-sm font-semibold outline-0 transition-all duration-200 focus-visible:ring-4 ${buttonColors[color]}`}
      to={path}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
