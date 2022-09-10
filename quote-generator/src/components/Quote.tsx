
interface QuoteProps {
  text: string,
}

const Quote = ({text}: QuoteProps) => {

  return (
    <div className="quote">
      “{text}”
    </div>
  );
};

export default Quote;