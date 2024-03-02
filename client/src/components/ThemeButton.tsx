import { LuSun, LuMoon } from 'react-icons/lu';
import useTheme from '../hooks/useTheme';

interface ThemeButtonProps {
  absolute?: boolean;
}

const absoluteStyles = 'absolute right-1 top-1';

function ThemeButton({ absolute }: ThemeButtonProps) {
  const { theme, toggleDarkMode } = useTheme();

  return (
    <button
      className={`rounded-lg p-2 text-xl outline-0 ring-blue-500 focus-visible:ring-4 ${absolute ? absoluteStyles : ''}`}
      onClick={() => toggleDarkMode()}
    >
      {theme === 'light' ? <LuSun /> : <LuMoon />}
    </button>
  );
}

export default ThemeButton;
