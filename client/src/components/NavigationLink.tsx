import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  path: string;
  children: React.ReactNode;
}

function NavigationLink({ path, children }: NavigationLinkProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
