import ButtonLink from '../components/ButtonLink';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img className="flex w-52" src="/error-404.png" alt="" />
      <div className="flex items-center gap-4 text-slate-950 dark:text-slate-300">
        <span className="text-4xl font-semibold">404</span>
        <span className="text-5xl">|</span>
        <p className="text-xl">This page could not be found.</p>
      </div>
      <ButtonLink size="small" path="/" color="transparent">
        Back to Home
      </ButtonLink>
    </div>
  );
}

export default NotFound;
