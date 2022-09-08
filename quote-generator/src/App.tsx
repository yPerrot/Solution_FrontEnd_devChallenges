import { useEffect, useState } from 'react';
import { Quote, getRandomQuote, getAuthorQuotes } from './api/QuoteAPI';
import QuoteJSX from './components/Quote';
import './App.scss';

function App() {

  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState<Quote[] |null>(null);

  useEffect(() => {
    if (!quotes) {
      getQuotes();
    }
  }, []);

  const getQuotes = async (quoteAuthor?: string) => {
    let quotesList: Quote[] = [];

    if (quoteAuthor) {
      quotesList = await getAuthorQuotes(quoteAuthor);
    } else {
      const randomQuote = await getRandomQuote(); 
      quotesList = [ randomQuote ];
    }

    setQuotes(quotesList);
  };

  const handleRandomQuote = () => {
    getQuotes();
    setAuthor('');
  };

  const handleAuthorQuotes = () => {
    if (quotes) {
      getQuotes(quotes[0].quoteAuthor);
      setAuthor(quotes[0].quoteAuthor);
    }
  };

  const quotsToJSX = () => {
    return quotes?.map( (q, index) => {
      return (
        <QuoteJSX text={q.quoteText} key={index} />
      );
    });
  };

  return (
    <>
      <header>
        <button onClick={handleRandomQuote} className='random-btn'>
          <span>random</span>
          <span className="material-icons">autorenew</span>
        </button>
      </header>

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
    </>
  );
}

export default App;
