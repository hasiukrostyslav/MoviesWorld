import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <section className="relative px-52 py-10 3xl:px-80">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Layout;
