import { Question } from '../API/RESTCountries';
import CardTitle from './CardTitle';

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

  const getLetter = (id: number) => {
    switch (id) {
    case 0: return 'A';
    case 1: return 'B';
    case 2: return 'C';
    case 3: return 'D';
    }
  };

  return (
    <div className='card'>
      <h1>Country Quiz</h1>
      <img src="/undraw_adventure_4hum 1.svg" alt="Undraw Adventure" />
      <div className='card__body'>
        <CardTitle question={question} />

        <div className="reponses answers">
          {question.responses.map((response, id) => (
            <button key={id} className={getResponseClass(id)} >
              <span className='letter'>{getLetter(id)}</span>
              <span className='response'>{response}</span>
              {getResponseClass(id) === 'invalid-response' &&
                <img className='validator' src="/invalid.svg" alt="Invalid Response" />
              }
              {getResponseClass(id) === 'valid-response' &&
                <img className='validator' src="/valid.svg" alt="Invalid Response" />
              }
              {/* {getResponseClass(id) === '' &&
                <img className='validator hidden' src="/valid.svg" alt="Invalid Response" />
              } */}
            </button>
          ))}
        </div>
        <button className='next-btn' onClick={() => handleClick()}>Next</button>
      </div>
    </div>
  );
}
  
export default AnswerCard;