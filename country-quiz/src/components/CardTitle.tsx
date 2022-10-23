import { Question, isFlagQuestion } from '../API/RESTCountries';

type CardTitleProps = {
    question: Question;
}

const CardTitle = ({ question } : CardTitleProps) => {
  return (
    <>
      {isFlagQuestion(question) ?
        // Flag Title
        <h2><span className='flag'>{question.flag}</span>Which country does this flag belong to?</h2>
        : 
        // Capital Title
        <h2>{`${question.capital} is the capital of`}</h2>
      }
    </>
  );
};

export default CardTitle;