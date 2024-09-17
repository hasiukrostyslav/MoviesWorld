const IMG_URL_LARGE = import.meta.env.VITE_IMG_URL_LARGE;

interface BackdropPoster {
  src: string;
  title: string;
  className?: string;
}

function BackdropPoster({ src, title, className }: BackdropPoster) {
  return (
    <img
      src={`${IMG_URL_LARGE}${src}`}
      alt={`${title} backdrop poster`}
      className={`absolute left-0 top-0 -z-10 h-screen w-full brightness-35 ${className}`}
    />
  );
}

export default BackdropPoster;
