import { useParams } from 'react-router-dom';

const Highlight = ({ query, text }) => {
  let { major } = useParams();
  let highlightStyle;
  switch (major) {
    case 'cs':
      highlightStyle = 'bg-cs/30';
      break;
    default:
      break;
  }

  const queryLength = query.length;
  const textLength = text.length;
  const firstIdx = text.toLowerCase().indexOf(query.toLowerCase());
  const lastIdx = queryLength + firstIdx;
  return (
    <>
      {text.slice(0, firstIdx)}
      {query && <mark className={highlightStyle}>{text.substring(firstIdx, lastIdx)}</mark>}
      {text.slice(lastIdx, textLength)}
    </>
  );
};

export default Highlight;
