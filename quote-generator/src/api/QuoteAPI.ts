
export interface Quote {
  _id: string, 
  quoteText: string, 
  quoteAuthor: string, 
  quoteGenre: string,

  __v: number,
}

interface APIResponseJSON {
  status: number, 
  message: string, 
  pagination: {
    currentPage: number, 
    nextPage: number,
    totalPages: number,
  }
  totalQuotes: number,

  data: Quote[]
}

const API_URL = 'https://quote-garden.herokuapp.com/api/v3/';

export async function getRandomQuote(): Promise<Quote> {
  const response = await fetch(API_URL + 'quotes/random');
  const json: APIResponseJSON = await response.json();
  
  return json.data[0];
}

export async function getAuthorQuotes(author: string): Promise<Quote[]> {
  const response = await fetch(API_URL + 'quotes/?author=' + author);
  const json: APIResponseJSON = await response.json();
  
  return json.data;
}
