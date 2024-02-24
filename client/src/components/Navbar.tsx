import User from "../pages/User";
import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

function Navbar() {
  return (
    <nav className="mb-4 flex items-center justify-between">
      <div className="flex items-center justify-between gap-12">
        <Logo />
        <ul className="flex items-center gap-8">
          <NavigationLink path="/">Home</NavigationLink>
          <NavigationLink path="/movies">Movies</NavigationLink>
          <NavigationLink path="/cartoons">Cartoons</NavigationLink>
          <NavigationLink path="/tv-shows">Shows</NavigationLink>
          <NavigationLink path="/actors">Actors</NavigationLink>
        </ul>
      </div>
      <User />
    </nav>
  );
}

export default Navbar;
