import { useState } from 'react';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import isURL from 'validator/es/lib/isURL';
import faqService from '../services/faq';
import Spinner from '../assets/Spinner';
import Editor from './Editor';
import Navbar from './Navbar';
import categories from '../utils/categories';
import faculties from '../utils/faculties';
import styleScheme from '../utils/styleScheme';

const ContributeAll = () => {
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState([]);
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const time = DateTime.now().toString();

  const [showError, setShowError] = useState(false);
  const [showSourceError, setShowSourceError] = useState(false);

  const {
    btnPrimaryStyle, checkboxStyle, textColor, textInputStyle,
  } = styleScheme.home;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (source && !isURL(source, { protocols: ['https'] })) {
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
        setShowSourceError(false);
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

  return (
    <>
      <Navbar />
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
              className={`${btnPrimaryStyle} flex-grow w-full`}
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
              defaultValue="default"
              onChange={(e) => setFaculty(e.target.value)}
              className="border-b focus:outline-none focus:border-default bg-white py-1"
              name="faculty"
              id="faculty"
              required
            >
              <option disabled hidden value="default"> Select a faculty </option>
              {faculties.map((fac) => (
                <option key={fac.codename} value={fac.codename}>
                  {fac.name}
                </option>
              ))}
            </select>
            <div role="group">
              <label htmlFor="major">Major*</label>
              <input
                className={textInputStyle}
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
                className={textInputStyle}
                type="text"
                id="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <Editor updateAns={(str) => setAnswer(str)} />
            <fieldset className="flex flex-col md:space-y-0 space-y-2">
              <legend>Category</legend>
              {categories.map((cat) => (
                <div key={cat} className="checkbox-group">
                  <input
                    className={checkboxStyle}
                    name="category"
                    type="checkbox"
                    id={cat}
                    value={cat}
                    onChange={handleCheckbox}
                  />
                  <label htmlFor={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    &nbsp;Students
                  </label>
                </div>
              ))}
            </fieldset>
            <div role="group">
              <label htmlFor="source"> Source (Website)</label>
              <input
                className={textInputStyle}
                type="text"
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value.toLowerCase())}
              />
              {showSourceError && <p className="text-red text-sm mt-1"> Invalid link. </p>}
            </div>
            <button
              className={btnPrimaryStyle}
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
              <a className={textColor} href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank">feedback form</a>
              .
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ContributeAll;
