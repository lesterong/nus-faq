const Highlight = ({ query, text }) => {
  const queryLength = query.length;
  const textLength = text.length;
  const firstIdx = text.toLowerCase().indexOf(query.toLowerCase());
  const lastIdx = queryLength + firstIdx;
  return (
    <>
      {text.slice(0, firstIdx)}
      {query && <mark>{text.substring(firstIdx, lastIdx)}</mark>}
      {text.slice(lastIdx, textLength)}
    </>
  );
};

export default Highlight;
