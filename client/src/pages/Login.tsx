import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';

function Login() {
  return (
    <section className="flex w-3/4 flex-col text-slate-500">
      <Logo type="dark" size="lg" className="self-center" />
      <div className="my-8">
        <h2 className="mb-3 text-3xl font-semibold text-slate-600">Sign in</h2>
        <p className="">
          Don't have an account?{' '}
          <Link
            to="/auth/signup"
            className="rounded-md px-1 py-1 font-semibold text-blue-500 outline-0 ring-blue-500 transition-all duration-200 hover:underline focus-visible:ring-2"
          >
            Sign up
          </Link>
        </p>
      </div>
      <form className="flex w-full flex-col last:mt-4" autoComplete="off">
        <div className="relative pb-6 pt-2">
          <label className="flex flex-col gap-1">
            Email Address
            <input
              type="email"
              name="email"
              className="rounded-md border-2 border-slate-300 px-3 py-2 text-sm outline-0 ring-blue-500 focus:border-transparent focus-visible:ring-4"
            />
          </label>
          <span className="absolute bottom-0 left-2 text-xs font-bold text-red-400">
            Email is required
          </span>
        </div>
        <div className="relative pb-6 pt-2">
          <label className="flex flex-col gap-1">
            Password
            <input
              type="password"
              className="rounded-md border-2 border-slate-300 px-3 py-2 text-sm outline-0 ring-blue-500 focus:border-transparent focus-visible:ring-4"
            />
          </label>
          <span className="absolute bottom-0 left-2 text-xs font-bold text-red-400">
            Password is required
          </span>
        </div>
        <Button color="primary" className="mt-6">
          Sign in
        </Button>
      </form>
      <Link
        to="/"
        className="mt-6 self-end rounded-md px-1 py-1 text-sm font-semibold text-blue-500 outline-0 ring-blue-500 transition-all duration-200 hover:underline focus-visible:ring-2"
      >
        Forgot your password?
      </Link>
    </section>
  );
}

export default Login;
