import { LuSun, LuMoon } from 'react-icons/lu';
import { useMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector, toggleTheme } from '../store';

interface ThemeButtonProps {
  absolute?: boolean;
}

const absoluteStyles = 'absolute right-1 top-1';

function ThemeButton({ absolute }: ThemeButtonProps) {
  const match = useMatch('/');
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <button
      className={`rounded-lg p-2 text-xl outline-0 ring-blue-500 focus-visible:ring-4 ${absolute ? absoluteStyles : ''} ${match ? 'text-slate-200' : ''}`}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === 'light' ? <LuSun /> : <LuMoon />}
    </button>
  );
}

export default ThemeButton;
