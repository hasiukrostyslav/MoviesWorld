import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
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
    children: [{ path: '*', element: <NotFound /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
