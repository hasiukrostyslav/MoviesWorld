import Icon from './Icon';

interface SocialLinkProps {
  linkTo: 'facebook' | 'instagram' | 'youtube' | 'twitter';
}

function SocialLink({ linkTo }: SocialLinkProps) {
  return (
    <li>
      <a
        className="outline-round flex p-1 text-2xl font-semibold hover:text-slate-500"
        target="_blank"
        href={`https://${linkTo}.com/`}
      >
        <Icon name={linkTo} />
      </a>
    </li>
  );
}

export default SocialLink;
