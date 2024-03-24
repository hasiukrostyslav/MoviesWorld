import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaYoutube,
  FaSquareXTwitter,
} from 'react-icons/fa6';

interface SocialLinkProps {
  linkTo: 'facebook' | 'instagram' | 'youtube' | 'twitter';
}

function SocialLink({ linkTo }: SocialLinkProps) {
  return (
    <li>
      <a
        className="flex rounded-lg p-1 text-2xl font-semibold outline-0 ring-blue-500 transition-all duration-500 hover:text-slate-500 focus-visible:ring-4"
        target="_blank"
        href={`https://${linkTo}.com/`}
      >
        {linkTo === 'facebook' && <FaSquareFacebook />}
        {linkTo === 'instagram' && <FaSquareInstagram />}
        {linkTo === 'youtube' && <FaYoutube />}
        {linkTo === 'twitter' && <FaSquareXTwitter />}
      </a>
    </li>
  );
}

export default SocialLink;
