import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./pages/AuthLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Actors from "./pages/Actors";
import User from "./pages/User";
import Cartoons from "./pages/Cartoons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "movies", element: <Movies /> },
      { path: "cartoons", element: <Cartoons /> },
      { path: "tv-shows", element: <TVShows /> },
      { path: "actors", element: <Actors /> },
      { path: "user", element: <User /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
