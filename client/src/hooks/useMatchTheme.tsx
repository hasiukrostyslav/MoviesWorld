import { useLocation, useMatch } from 'react-router-dom';
import { useScroll } from './useScroll';

export function useMatchTheme() {
  const { isScroll } = useScroll();
  const matchHome = useMatch('/');
  const matchCollection = useMatch('collections');
  const location = useLocation();
  const matchPath =
    location.pathname.includes('view/tv') ||
    location.pathname.includes('view/movie');

  const match = (matchHome || matchCollection || matchPath) && !isScroll;

  return match;
}
