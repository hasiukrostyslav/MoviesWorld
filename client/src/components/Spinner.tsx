import { useAppSelector } from '../store';

function Spinner() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <span
      className={`fixed left-1/2 top-1/2 h-4 w-4 rounded-full text-sm ${theme === 'dark' ? 'blue-spin' : 'gray-spin'}`}
    ></span>
  );
}

export default Spinner;
