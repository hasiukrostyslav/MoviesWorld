import AuthMenu from './AuthMenu';
import ThemeButton from './ThemeButton';
import UserMenu from './UserMenu';

function TopBar() {
  return (
    <div className="flex gap-10">
      <ThemeButton />
      <AuthMenu />
      <UserMenu />
    </div>
  );
}

export default TopBar;
