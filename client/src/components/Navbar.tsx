import Logo from './Logo';
import NavigationLink from './NavigationLink';
import TopBar from './TopBar';

function Navbar() {
  return (
    <nav className="relative z-10 mb-4 flex items-center justify-between">
      <div className="3xl:gap-12 flex items-center justify-between gap-8">
        <Logo size="base" />
        <ul className="3xl:gap-8 flex items-center gap-6">
          <NavigationLink path="/">Home</NavigationLink>
          <NavigationLink path="/movies">Movies</NavigationLink>
          <NavigationLink path="/cartoons">Cartoons</NavigationLink>
          <NavigationLink path="/tv-shows">Shows</NavigationLink>
          <NavigationLink path="/actors">Actors</NavigationLink>
        </ul>
      </div>
      <TopBar />
    </nav>
  );
}

export default Navbar;
