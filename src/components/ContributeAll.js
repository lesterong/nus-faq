import { useState } from 'react';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import isURL from 'validator/es/lib/isURL';
import faqService from '../services/faq';
import Spinner from '../assets/Spinner';
import Editor from './Editor';
import Logo from '../assets/Logo';

const ContributeAll = () => {
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  let navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState([]);
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const time = DateTime.now().toString();

  const [showError, setShowError] = useState(false);
  const [showSourceError, setShowSourceError] = useState(false);

  let linkStyle = 'text-default';

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
      major,
      question,
      answer,
      category,
      source: url,
      lastUpdated: time,
      id: uuidv4(),
    };
    setLoading(true);
    faqService.create(newFaq, faculty)
      .then(() => {
        setLoading(false);
        setShowError(false);
        setFaculty('');
        setMajor('');
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

  let btnStyle = 'rounded-lg py-2 text-sm transition-all duration-100 bg-default/20 hover:bg-default/30 active:bg-default/40';
  let focusStyle = 'focus:outline-none border-b focus-visible:border-default';
  let checkboxStyle = 'appearance-none h-3 w-3 rounded-sm border checked:bg-default';
  let baseBtnStyle = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0 focus-visible:ring-default';

  return (
    <>
      <nav>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="focus-white flex space-x-2"
          aria-label="Logo"
        >
          <Logo major="nus" />
          <h1>
            <b> NUS </b>
            FAQ
          </h1>
        </button>
      </nav>
      <div className="p-4 flex justify-items-center mx-auto max-w-lg">
        <form
          className="flex flex-col space-y-3 bg-white py-4 px-6 rounded-lg shadow-sm h-max"
          onSubmit={handleSubmit}
        >
          {showSuccess && (
          <>
            <h2 className="mx-auto"> Your submission has been received! Thanks for contributing. </h2>
            <button
              type="button"
              aria-label="Contribute more"
              onClick={() => setShowSuccess(false)}
              className={`${btnStyle} ${baseBtnStyle} bg-white hover:bg-black/10 active:bg-black/20 flex-grow w-full`}
            >
              Contribute more
            </button>
          </>
          )}
          {!showSuccess && (
          <>
            <h2> Contribute your questions and answers for the NUS FAQ! </h2>
            <label htmlFor="faculty">Faculty*</label>
            <select
              defaultValue="1"
              onChange={(e) => setFaculty(e.target.value)}
              className="border-b focus:outline-none focus:border-default bg-white py-1"
              name="faculty"
              id="faculty"
              required
            >
              <option disabled hidden value="1"> Select a faculty </option>
              <option value="fass"> Arts and Social Science </option>
              <option value="biz"> Business </option>
              <option value="soc"> Computing </option>
              <option value="fod"> Dentistry </option>
              <option value="cde"> Design and Engineering </option>
              <option value="fol"> Law </option>
              <option value="yll"> Medicine </option>
              <option value="yst"> Music </option>
              <option value="fos"> Science </option>
              <option value="others"> Others (e.g. NUS College) </option>
            </select>
            <div role="group">
              <label htmlFor="major">Major*</label>
              <input
                className={focusStyle}
                type="text"
                name="major"
                id="major"
                value={major}
                required
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>
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
              major=""
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
              {!loading ? 'Submit' : <Spinner size="h-5" />}
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
    </>
  );
};

export default ContributeAll;
