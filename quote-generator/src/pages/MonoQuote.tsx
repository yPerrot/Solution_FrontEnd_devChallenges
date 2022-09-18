import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomQuote, Quote } from '../api/QuoteAPI';
import QuoteJSX from '../components/Quote';
function MonoQuote() {

  const navigate = useNavigate();

  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    if (!quote) {
      getRandomQuote().then(q => {
        setQuote(q);
      });
    }
  }, []);

  const handleQuoteBtn = () => {
    navigate(`/author?name=${quote?.quoteAuthor}`);
  };
    
  return (
    <>
      <main>
        {quote &&
        <>
          <QuoteJSX text={quote.quoteText} />
          <button onClick={handleQuoteBtn} className='quote-btn'>
            <div className='quote-btn__text'>
              <p className='quote-btn__text__author'>{quote.quoteAuthor}</p>
              <p className='quote-btn__text__genre'>{quote.quoteGenre}</p>
            </div>
            <span className="material-icons">east</span>
          </button>
        </>
        }
      </main>
    </>
  );
}

export default MonoQuote;