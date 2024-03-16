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
        className="text-2xl transition-all duration-500 hover:text-slate-500"
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
