import { Quote } from '../api/QuoteAPI';
import QuoteJSX from '../components/Quote';

interface MainProps {
  author: string;
  quotes: Quote[] | null;

  handleAuthorQuotes: () => void;   
}

function Main( { author, quotes, handleAuthorQuotes }: MainProps) {
    
  const quotsToJSX = () => {
    return quotes?.map( (q, index) => {
      return (
        <QuoteJSX text={q.quoteText} key={index} />
      );
    });
  };
    
  return (
    <main>
      <h1>{author}</h1>
      {quotes && quotsToJSX()}
      {author === '' && quotes != null && 
        <button onClick={handleAuthorQuotes} className='quote-btn'>
          <div className='quote-btn__text'>
            <p className='quote-btn__text__author'>{quotes[0].quoteAuthor}</p>
            <p className='quote-btn__text__genre'>{quotes[0].quoteGenre}</p>
          </div>
          <span className="material-icons">east</span>
        </button>
      }
    </main>
  );
}

export default Main;