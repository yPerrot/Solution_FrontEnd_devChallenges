import Partial from './partial.json';

function rand(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomInt(end: number, nbNumberToGenerate = 1) {
  const arr: number[] = [];

  while(arr.length < nbNumberToGenerate) {
    const r = rand(end - 1);
    if (!arr.includes(r)) arr.push(r);
  }

  return arr;
}

function getRandomCountries() {
  const arr = getRandomInt(Partial.length, 4);
  return arr.map(id => Partial[id]);
}


export function getRandomCapitalQuestion(): CapitalQuestion {
  const randomContries = getRandomCountries();
  const responseId = rand(randomContries.length - 1);
  
  return {
    capital: randomContries[responseId].capital,
    responseId: responseId,
    responses: randomContries.map(contry => contry.name)
  };
}

export function getRandomFlagQuestion(): FlagQuestion {
  const randomContries = getRandomCountries();
  const responseId = rand(randomContries.length - 1);
  
  return {
    flag: randomContries[responseId].flag,
    responseId: responseId,
    responses: randomContries.map(contry => contry.name)
  };
}

export type Question = {
  responseId: number,
  responses: string[],

  flag?: string,
  capital?: string,
}

export type CapitalQuestion = Question & {
  capital: string,
}
export type FlagQuestion = Question & {
  flag: string,
}

export function isCapitalQuestion(o: unknown): o is CapitalQuestion {
  return !!o && !!(o as CapitalQuestion).capital && !!(o as CapitalQuestion).responseId && !!(o as CapitalQuestion).responses; 
}

export function isFlagQuestion(o: unknown): o is FlagQuestion {
  return !!o && !!(o as FlagQuestion).flag && !!(o as FlagQuestion).responseId && !!(o as FlagQuestion).responses; 
}