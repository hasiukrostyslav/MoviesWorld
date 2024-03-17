import SocialLink from './SocialLink';

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 border-t-2 border-slate-300 py-10 dark:border-slate-500">
      <ul className="flex gap-4">
        <SocialLink linkTo="facebook" />
        <SocialLink linkTo="instagram" />
        <SocialLink linkTo="youtube" />
        <SocialLink linkTo="twitter" />
      </ul>
      <p className="font-lights text-xs">
        &copy; MoviesWorld {new Date().getFullYear()}. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
