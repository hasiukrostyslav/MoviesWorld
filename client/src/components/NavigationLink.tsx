import { NavLink } from 'react-router-dom';
import { useMatchTheme } from '../hooks/useMatchTheme';

interface NavigationLinkProps {
  path: string;
  children: React.ReactNode;
  className?: string;
}

const baseStyles = 'outline-round px-2 py-1 z-20';

function NavigationLink({ path, children, className }: NavigationLinkProps) {
  const match = useMatchTheme();

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${baseStyles} ${className} ${match ? 'text-blue-500 hover:text-blue-400' : 'text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400'}`
          : `${baseStyles} ${className} ${match ? 'text-slate-200 hover:text-slate-50' : 'hover:text-slate-500 dark:hover:text-slate-50'}`
      }
      to={path}
    >
      {children}
    </NavLink>
  );
}

export default NavigationLink;
