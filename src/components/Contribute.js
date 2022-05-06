import { useState } from "react";
import { DateTime } from "luxon";
import faqService from "../services/faq";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";

const Contribute = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState([]);
  const [source, setSource] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const time = DateTime.now().toString();
  let params = useParams();
  const major = params.major;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFaq = {
      question: question,
      answer: answer,
      category: category,
      source: source,
      lastUpdated: time,
      id: uuidv4()
    }
    faqService.create(newFaq, major)
      .then(res => {
        setQuestion('')
        setAnswer('')
        setCategory([])
        setSource([])
        setShowSuccess(true)
      })
  }

  const handleCheckbox = e => {
    e.target.checked
    ? setCategory(category.concat(e.target.value))
    : setCategory(category.filter(val => val !== e.target.value))
  }

  let submitStyle = "rounded-lg py-2 text-sm transition-all duration-100";
  let focusStyle = "focus:outline-none focus-visible:border-b";
  let checkboxStyle = "appearance-none h-3 w-3 rounded-sm border"
  let baseBtnStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0"
  switch (major) {
    case 'cs':
      submitStyle += " bg-cs/20 hover:bg-cs/30 active:bg-cs/40"
      focusStyle += " focus-visible:border-cs"
      checkboxStyle += " checked:bg-cs"
      baseBtnStyle += " focus-visible:ring-cs"
      break;
    default:
      break;
  }

  return (
    <div className="p-4 flex place-items-center justify-items-center mx-auto">
      <form 
        className="flex flex-col space-y-3 bg-white py-4 px-6 rounded-lg shadow-sm" onSubmit={handleSubmit}
      >
      {showSuccess && 
        <>
        <h2 className="mx-auto"> Your submission has been received! Thanks for contributing. </h2>
        <button
          aria-label="Contribute more"
          onClick={() => setShowSuccess(false)}
          className={baseBtnStyle} >
            Contribute more
          </button>
        </>
      }
        {!showSuccess && <><h2> Contribute your questions (and answers) for {major.toUpperCase()}! </h2>
        <div role="group">
          <label htmlFor="question">Question*</label>
          <input
            className={focusStyle}
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
          />
        </div>
        <div role="group">
          <label htmlFor="answer">Answer</label>
          <div 
            className={focusStyle}
            contentEditable
            suppressContentEditableWarning={true}
            id="answer" 
            name="answer"
            onInput={e => setAnswer(e.target.innerText)} /> 
        </div>
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
          <label htmlFor="source"> Source </label>
          <input
            className={focusStyle}
            type="text"
            id="source"
            value={source}
            onChange={e => setSource(e.target.value)}
          />
        </div>

        <button 
          className={`${submitStyle} ${baseBtnStyle}`}
          type='submit'> 
            Submit
        </button> </>}
      </form>
    </div>
  )
}

export default Contribute;