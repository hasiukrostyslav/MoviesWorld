import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <section className="px-16 py-10">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Layout;
