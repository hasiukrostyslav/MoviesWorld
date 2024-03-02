import { NavLink } from 'react-router-dom';

interface NavigationLinkProps {
  path: string;
  children: React.ReactNode;
}

const baseStyles =
  'duration-400 rounded-md outline-0 transition-all ring-blue-500 outline-0 focus-visible:ring-4 px-2 py-1';

function NavigationLink({ path, children }: NavigationLinkProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${baseStyles} text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400`
            : `${baseStyles} hover:text-slate-500 dark:hover:text-slate-200`
        }
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
