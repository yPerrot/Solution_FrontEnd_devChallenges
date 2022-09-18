import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuthorQuotes, Quote } from '../api/QuoteAPI';
import QuoteJSX from '../components/Quote';

function MultiQuotes() {
  
  const search = useLocation().search;
  const authorName = new URLSearchParams(search).get('name');

  const [quotes, setQuotes] = useState<Quote[] | null>(null);

  useEffect(() => {
    if (authorName && !quotes) {
      getAuthorQuotes(authorName).then(quotesList => {
        setQuotes(quotesList);
      });
    }
  }, []);
  
  const quotsToJSX = () => {
    return quotes?.map( (q, index) => {
      return (
        <QuoteJSX text={q.quoteText} key={index} />
      );
    });
  };

  return (
    <>
      <main>
        {quotes &&
          <>
            <h1>{authorName}</h1>
            {quotsToJSX()}
          </>
        }
      </main>
    </>
  );
}
  
export default MultiQuotes;