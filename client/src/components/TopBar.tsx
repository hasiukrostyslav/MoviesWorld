import AuthMenu from './AuthMenu';
import SearchBoard from './SearchBoard';
import SearchForm from './SearchForm';
import ThemeButton from './ThemeButton';
import UserMenu from './UserMenu';

function TopBar() {
  return (
    <div className="relative flex gap-5" id="top-bar">
      <SearchForm />
      <SearchBoard />
      <ThemeButton />
      <AuthMenu />
      <UserMenu />
    </div>
  );
}

export default TopBar;
