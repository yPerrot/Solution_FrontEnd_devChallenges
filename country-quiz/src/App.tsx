import { getRandomCapitalQuestion, getRandomFlagQuestion, CapitalQuestion, FlagQuestion } from './API/RESTCountries';
import { useEffect, useState } from 'react';
import CountCard from './components/CountCard';
import QuestionCard from './components/QuestionCard';
import AnswerCard from './components/AnswerCard';

function App() {

  const [count, setCount] = useState(0);

  const [question, setQuestion] = useState<CapitalQuestion | FlagQuestion | null>(null);
  // const [responses, setResponses] = useState<string[]>([]);
  const [responseId, setResponseId] = useState(-1);
  // const [capital, setCapital] = useState('');
  // const [flag, setFlag] = useState('');

  const [stage, setStage] = useState<'Question' | 'Answer' | 'Score'>('Question');

  const resetAnswersCount = () => {
    setCount(0);
  };

  const increaseAnswersCounter = () => {
    setCount(count + 1);
  };

  const nextStage = () => {
    if (stage === 'Question') setStage('Answer');
    else if (stage === 'Answer') setStage('Score');
    else setStage('Question');
  };

  const initQuestion = () => {
    if (Math.random() > 0.5) {
      setQuestion(getRandomFlagQuestion());
    } else {
      setQuestion(getRandomCapitalQuestion());
    }
  };

  const checkAnswer = (id: number) => {
    if (id === question?.responseId) {
      increaseAnswersCounter();
    } else {
      resetAnswersCount();
    }
  };

  const questionCardNextPage = (resId: number) => {
    setResponseId(resId);
    checkAnswer(resId);
    nextStage();
  };

  const answerCardNextPage = () => {
    nextStage();
  };

  const countCardNextPage = () => {
    initQuestion();
    nextStage();
  };

  useEffect(() => {
    initQuestion();
  }, []);

  return (
    <>
      {(question !== null) &&
        <>
          {(stage === 'Question') &&
            <QuestionCard
              question={question}
              nextPage={questionCardNextPage}
            />
          }
          {(stage === 'Answer') &&
            <AnswerCard
              question={question}
              responseId={responseId}
              nextPage={answerCardNextPage}
            />
          }
          {(stage === 'Score') &&
            <CountCard
              count={count}
              nextPage={countCardNextPage}
            />
          }
        </>
      }
    </>

  );
}

export default App;
