import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const handleRandomQuote = () => {
    navigate('/');
  };

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