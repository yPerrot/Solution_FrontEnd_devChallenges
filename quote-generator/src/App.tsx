import { useEffect, useState } from 'react';
import { Quote, getRandomQuote, getAuthorQuotes } from './api/QuoteAPI';
import Header from './layouts/Header';
import Main from './layouts/Main';
import './App.scss';

function App() {

  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState<Quote[] | null>(null);

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

  return (
    <>
      <Header handleRandomQuote={handleRandomQuote}/>
      <Main
        author={author}
        quotes={quotes}
        handleAuthorQuotes={handleAuthorQuotes}
      />
    </>
  );
}

export default App;
