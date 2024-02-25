import { Outlet } from 'react-router-dom';

function OuterLayout() {
  return (
    <section className="bg-movies flex min-h-screen justify-end bg-cover bg-no-repeat">
      <div className="clipped flex basis-3/5 items-center justify-center bg-slate-100 py-6 pl-36 pr-6">
        <Outlet />
      </div>
    </section>
  );
}

export default OuterLayout;
