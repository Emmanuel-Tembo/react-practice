import earthImage from '../assets/3026375-middle.png';

export function Header() {
  return (
    <header>
      <img src={earthImage} alt="earth" />
      <span>My travel journal.</span>
    </header>
  );
}
