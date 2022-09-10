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
      <div onClick={handleAuthorQuotes}>
        <span>{quotes[0].quoteAuthor}</span>
        <span className="material-icons">east</span>
      </div>
      }
    </main>
  );
}

export default Main;