import { useState } from 'react';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import isURL from 'validator/es/lib/isURL';
import faqService from '../services/faq';
import Spinner from '../assets/Spinner';
import Editor from './Editor';

const Contribute = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState([]);
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const time = DateTime.now().toString();
  const { major } = useParams();
  let navigate = useNavigate();

  const [showError, setShowError] = useState(false);
  const [showSourceError, setShowSourceError] = useState(false);

  let linkStyle;
  switch (major) {
    case 'cs':
      linkStyle = 'text-cs';
      break;
    default:
      break;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isURL(source, { protocols: ['https'] })) {
      setShowSourceError(true);
      return;
    }
    const url = source.includes('https://') || !source
      ? source
      : `https://${source}`;

    const newFaq = {
      question,
      answer,
      category,
      source: url,
      lastUpdated: time,
      id: uuidv4(),
    };
    setLoading(true);
    faqService.create(newFaq, major)
      .then(() => {
        setLoading(false);
        setShowError(false);
        setQuestion('');
        setAnswer('');
        setCategory([]);
        setSource('');
        setShowSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setShowError(true);
      });
  };

  const handleCheckbox = (e) => (
    e.target.checked
      ? setCategory(category.concat(e.target.value))
      : setCategory(category.filter((val) => val !== e.target.value))
  );

  let btnStyle = 'rounded-lg py-2 text-sm transition-all duration-100';
  let focusStyle = 'focus:outline-none border-b';
  let checkboxStyle = 'appearance-none h-3 w-3 rounded-sm border';
  let baseBtnStyle = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0';
  switch (major) {
    case 'cs':
      btnStyle += ' bg-cs/20 hover:bg-cs/30 active:bg-cs/40';
      focusStyle += ' focus-visible:border-cs';
      checkboxStyle += ' checked:bg-cs';
      baseBtnStyle += ' focus-visible:ring-cs';
      break;
    default:
      break;
  }

  return (
    <div className="p-4 flex justify-items-center mx-auto max-w-lg">
      <form
        className="flex flex-col space-y-3 bg-white py-4 px-6 rounded-lg shadow-sm h-max"
        onSubmit={handleSubmit}
      >
        {showSuccess && (
          <>
            <h2 className="mx-auto"> Your submission has been received! Thanks for contributing. </h2>
            <div className="flex space-x-2">
              <button
                type="button"
                aria-label="Return to FAQ"
                onClick={() => {
                  setShowSuccess(false);
                  navigate('./../prospective');
                }}
                className={`${btnStyle} ${baseBtnStyle} flex-grow`}
              >
                Back to FAQ
              </button>
              <button
                type="button"
                aria-label="Contribute more"
                onClick={() => setShowSuccess(false)}
                className={`${btnStyle} ${baseBtnStyle} bg-white hover:bg-black/10 active:bg-black/20 border flex-grow`}
              >
                Contribute more
              </button>
            </div>
          </>
        )}
        {!showSuccess && (
          <>
            <h2>
              Contribute your questions (and answers) for&nbsp;
              {major.toUpperCase()}
              !
            </h2>
            <div role="group">
              <label htmlFor="question">Question*</label>
              <input
                className={focusStyle}
                type="text"
                id="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <Editor
              updateAns={(str) => setAnswer(str)}
              major={major}
            />
            <fieldset className="flex flex-col md:space-y-0 space-y-2">
              <legend>Category</legend>
              <div className="checkbox-group">
                <input
                  className={checkboxStyle}
                  name="Category"
                  type="checkbox"
                  id="prospective"
                  value="prospective"
                  onChange={handleCheckbox}
                />
                <label htmlFor="prospective">Prospective Students</label>
              </div>
              <div className="checkbox-group">
                <input
                  className={checkboxStyle}
                  name="Category"
                  type="checkbox"
                  id="incoming"
                  value="incoming"
                  onChange={handleCheckbox}
                />
                <label htmlFor="incoming">Incoming Students</label>
              </div>
              <div className="checkbox-group">
                <input
                  className={checkboxStyle}
                  name="Category"
                  type="checkbox"
                  id="current"
                  value="current"
                  onChange={handleCheckbox}
                />
                <label htmlFor="current">Current Students</label>
              </div>
            </fieldset>

            <div role="group">
              <label htmlFor="source"> Source (Website)</label>
              <input
                className={focusStyle}
                type="text"
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value.toLowerCase())}
              />
              {showSourceError && <p className="text-red text-sm mt-1"> Invalid link. </p>}
            </div>
            <button
              className={`${btnStyle} ${baseBtnStyle}`}
              disabled={loading}
              type="submit"
            >
              {!loading ? 'Submit' : <Spinner major={major} size="h-5" />}
            </button>
          </>
        )}

        {showError && (
          <div className="text-red">
            Network error. If this persists, drop me a message on the&nbsp;
            <a className={linkStyle} href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank">feedback form</a>
            .
          </div>
        )}
      </form>
    </div>
  );
};

export default Contribute;
