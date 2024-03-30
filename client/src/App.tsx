import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from './store';
import Layout from './pages/Layout';
import OuterLayout from './pages/OuterLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFoundPage from './pages/NotFoundPage';
import Movies from './pages/Movies';
import Cartoons from './pages/Cartoons';
import TVShows from './pages/TVShows';
import Collections from './pages/Collections';
import Actors from './pages/Actors';
import User from './pages/User';
import TrendingMovies from './pages/TrendingMovies';
import TrendingShows from './pages/TrendingShows';
import MoviesList from './pages/MoviesList';
import TVList from './pages/TVList';
import CartoonList from './pages/CartoonList';
import CollectionListPage from './pages/CollectionListPage';
import MoviePage from './pages/MoviePage';
import ActorPage from './pages/ActorPage';
import ShowPage from './pages/ShowPage';
import ShowSeasonPage from './pages/ShowSeasonPage';
import ShowEpisodePage from './pages/ShowEpisodePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/trending/movies', element: <TrendingMovies /> },
      { path: '/trending/tv', element: <TrendingShows /> },
      {
        path: 'movies',
        children: [
          { index: true, element: <Movies /> },
          { path: 'category/:key', element: <MoviesList /> },
        ],
      },

      {
        path: 'cartoons',
        children: [
          { index: true, element: <Cartoons /> },
          { path: 'category/:type/:key', element: <CartoonList /> },
        ],
      },
      {
        path: 'tv-shows',
        children: [
          { index: true, element: <TVShows /> },
          { path: 'category/:key', element: <TVList /> },
        ],
      },
      { path: 'actors', element: <Actors /> },
      {
        path: 'collections',
        children: [
          { index: true, element: <Collections /> },
          { path: ':id', element: <CollectionListPage /> },
        ],
      },
      {
        path: 'view',
        children: [
          {
            path: 'movie/:id',
            element: <MoviePage />,
          },
          {
            path: 'actor/:id',
            element: <ActorPage />,
          },
          {
            path: 'tv/:id',
            element: <ShowPage />,
          },
          {
            path: 'tv/:id/season/:seasonId',
            element: <ShowSeasonPage />,
          },
          {
            path: 'tv/:id/season/:seasonId/episode/:episodeId',
            element: <ShowEpisodePage />,
          },
        ],
      },
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
