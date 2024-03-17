import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './pages/Layout';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Actors from './pages/Actors';
import User from './pages/User';
import Cartoons from './pages/Cartoons';
import OuterLayout from './pages/OuterLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'movies', element: <Movies /> },
      { path: 'cartoons', element: <Cartoons /> },
      { path: 'tv-shows', element: <TVShows /> },
      { path: 'actors', element: <Actors /> },
      { path: 'user', element: <User /> },
    ],
  },
  {
    path: '/auth',
    element: <OuterLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <OuterLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }],
  },
]);

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    if (
      theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
