import { Question } from '../API/RESTCountries';
import CardTitle from './CardTitle';

interface QuestionCardProps {
  question: Question,
  nextPage: (id: number) => void,
}

function QuestionCard({ question, nextPage }: QuestionCardProps) {

  const handleClick = (id: number) => {
    nextPage(id);
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
      
        <div className="reponses">
          {question.responses.map((response, id) => (
            <button key={id} onClick={() => handleClick(id)} >
              <span className='letter'>{getLetter(id)}</span>
              <span className='response'>{response}</span>
              <img className='validator hidden' src="/invalid.svg" alt="Invalid Response" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default QuestionCard;