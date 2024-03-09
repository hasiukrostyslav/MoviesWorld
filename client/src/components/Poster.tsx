interface PosterProps {
  src: string;
  title: string;
}

function Poster({ src, title }: PosterProps) {
  return (
    <img
      src={src}
      alt={`${title} poster`}
      className="h-img aspect-img rounded-lg"
    ></img>
  );
}

export default Poster;
