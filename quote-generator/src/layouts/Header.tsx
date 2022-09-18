import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const handleRandomQuote = () => {
    if (window.location.pathname === '/') window.location.href = '/';
    else navigate('/');
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