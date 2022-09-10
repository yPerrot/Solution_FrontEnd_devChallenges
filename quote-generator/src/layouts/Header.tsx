
interface HeaderProps {
    handleRandomQuote: () => void,
}

function Header({ handleRandomQuote }: HeaderProps) {

  return (
    <header>
      <button onClick={handleRandomQuote} className='random-btn'>
        <span>random</span>
        <span className="material-icons">autorenew</span>
      </button>
    </header>
  );
}

export default Header;