import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <section className="3xl:px-80 relative px-52 py-10">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Layout;
