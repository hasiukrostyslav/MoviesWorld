import { NavLink } from 'react-router-dom';

interface NavigationLinkProps {
  path: string;
  children: React.ReactNode;
}

function NavigationLink({ path, children }: NavigationLinkProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'duration-400 text-blue-500 transition-all hover:text-blue-400'
            : 'duration-400 transition-all hover:text-slate-200'
        }
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
