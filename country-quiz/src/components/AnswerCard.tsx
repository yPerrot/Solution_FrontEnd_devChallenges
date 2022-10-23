import { Question, isCapitalQuestion, isFlagQuestion } from '../API/RESTCountries';

interface AnswerCardProps {
    question: Question,
    responseId: number,
    nextPage: () => void,
  }
  
function AnswerCard({question, responseId, nextPage}: AnswerCardProps) {
  
  const handleClick = () => {
    nextPage();
  };

  const getResponseClass = (id: number) => {
    const userResponse = responseId;
    const goodResponseId = question.responseId;

    if (id === goodResponseId) {
      return 'valid-response';
    }

    if (id === userResponse) {
      return 'invalid-response';
    }

    return '';
  };

  return (
    <div className='card'>
      <h1>Country Quiz</h1>
      <img src="/undraw_adventure_4hum 1.svg" alt="Undraw Adventure" />
      <div>
        {isFlagQuestion(question) && 
          <h2><span>{question.flag}</span>Which country does this flag belong to?</h2>
        }
        {isCapitalQuestion(question) && 
          <h2>{`${question.capital} is the capital of`}</h2>
        }
        <div className="reponses">
          {question.responses.map((response, id) => (
            <button key={id} className={getResponseClass(id)}>{response}</button>
          ))}
        </div>
        <button onClick={() => handleClick()}>Next</button>
      </div>
    </div>
  );
}
  
export default AnswerCard;