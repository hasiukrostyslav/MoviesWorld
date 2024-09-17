import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <section className="">
        <div className="relative px-40 pt-10 3xl:px-72">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
