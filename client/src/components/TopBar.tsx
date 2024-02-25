import ButtonLink from './ButtonLink';

function TopBar() {
  return (
    <div className="flex gap-5">
      <ButtonLink color="transparent" path="auth/login">
        Log in
      </ButtonLink>
      <ButtonLink color="primary" path="auth/signup">
        Sign up
      </ButtonLink>
    </div>
  );
}

export default TopBar;
