import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <section className="relative px-80 py-10">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Layout;
