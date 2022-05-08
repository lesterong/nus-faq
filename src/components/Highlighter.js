import { useParams } from 'react-router-dom';
import styleScheme from '../utils/styleScheme';

const Highlight = ({ query, text }) => {
  let { major = 'home' } = useParams();
  const { highlightColor } = styleScheme[major];

  const queryLength = query.length;
  const textLength = text.length;
  const firstIdx = text.toLowerCase().indexOf(query.toLowerCase());
  const lastIdx = queryLength + firstIdx;
  return (
    <>
      {text.slice(0, firstIdx)}
      {query && <mark className={highlightColor}>{text.substring(firstIdx, lastIdx)}</mark>}
      {text.slice(lastIdx, textLength)}
    </>
  );
};

export default Highlight;
