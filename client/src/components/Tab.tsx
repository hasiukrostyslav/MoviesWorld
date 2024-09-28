import { NavLink } from 'react-router-dom';

interface TabProps {
  children: React.ReactNode;
  to: string;
  tabType: string;
  searchParamType: string | null;
}

const baseStyles =
  'duration-500 rounded-md outline-0 transition-all ring-blue-500 outline-0 focus-visible:ring-4 px-2 py-1 text-xl font-semibold basis-1/4 text-center';

function Tab({ children, to, tabType, searchParamType }: TabProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive && tabType === searchParamType
          ? `${baseStyles}  text-blue-600  hover:text-blue-400 `
          : `${baseStyles}  text-slate-400 hover:text-slate-500 dark:text-slate-600 dark:hover:text-slate-400`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default Tab;
