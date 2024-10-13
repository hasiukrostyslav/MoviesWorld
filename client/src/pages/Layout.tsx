import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useScroll } from '../hooks/useScroll';
import { createPortal } from 'react-dom';

function Layout() {
  const { isScroll } = useScroll();

  return (
    <>
      <ScrollToTop />
      {isScroll &&
        createPortal(
          <div className="fixed left-0 top-0 z-40 h-24 w-screen bg-slate-200  dark:bg-slate-800"></div>,
          document.body,
        )}
      <section>
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
