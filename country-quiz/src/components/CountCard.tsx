
interface CountCardProps {
  count: number;
  nextPage: () => void;
}

function CountCard({ count, nextPage }: CountCardProps) {
  
  const handleClick = () => {
    nextPage();
  };
  
  return (
    <div className="card">
      <h1>Country Quiz</h1>
      <div className="card__body count-card">
        <img src="/undraw_winners_ao2o 2.svg" alt="Undraw Adventure" />
        <h2>Results</h2>
        <p>you got <span>{count}</span> correct ansewr{count > 1 ? 's' : ''}</p>
        <button onClick={handleClick}>Try again</button>
      </div>
    </div>
  );
}

export default CountCard;