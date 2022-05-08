import { useState } from 'react';
import parse from 'html-react-parser';
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';
import Arrow from '../assets/Arrow';
import Highlight from './Highlighter';
import styleScheme from '../utils/styleScheme';

const Item = ({ q, currQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, source } = q;
  const answer = parse(q.answer);
  const lastUpdated = DateTime.fromISO(q.lastUpdated).toLocaleString(DateTime.DATETIME_MED);

  let params = useParams();
  const { major } = params;
  const { contentStyle, itemStyle } = styleScheme[major];

  return (
    <div className="mb-3 bg-white rounded-lg md:w-[32rem] w-[96vw] shadow-sm">
      <button
        type="button"
        aria-label="item title"
        className={itemStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>
          <Highlight query={currQuery || ''} text={question} />
        </h2>
        <Arrow isOpen={isOpen} />
      </button>
      {isOpen && (
      <div className={`px-3 pb-3 ${contentStyle}`}>
        {answer}
        <div className="flex justify-between border-t mt-4 border-black/10">
          <p>
            <small>
              <a href={source} rel="noreferrer noopener nofollow" target="_blank">source</a>
            </small>
          </p>
          <p className="text-black/40">
            <small>
              Updated on&nbsp;
              {lastUpdated}
            </small>
          </p>
        </div>
      </div>
      )}
    </div>
  );
};

export default Item;
