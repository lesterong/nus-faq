import { useState } from "react";
import { DateTime } from "luxon";
import faqService from "../services/faq";
import { v4 as uuidv4 } from 'uuid';

const Contribute = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState([]);
  const [source, setSource] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const time = DateTime.now().toString();

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
    faqService.create(newFaq)
      .then(res => {
        setQuestion('')
        setAnswer('')
        setCategory([])
        setSource([])
        setShowSuccess(true)
      })
  }

  return (
    <div className="contribute-container">
      <form className="contribute-form" onSubmit={handleSubmit}>
      {showSuccess && 
        <>
        <h2 className="mx-auto"> Your submission has been received! Thanks for contributing. </h2>
        <button aria-label="Contribute more" onClick={() => setShowSuccess(false)}> Contribute more </button>
        </>
      }
        {!showSuccess && <><h2> Contribute your questions (and answers)! </h2>
        <div role="group">
          <label htmlFor="question">Question*</label>
          <input 
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
            contentEditable
            suppressContentEditableWarning={true}
            id="answer" 
            name="answer"
            onInput={e => setAnswer(e.target.innerText)} /> 
        </div>
        <fieldset>
          <legend>Category</legend>
          <div>
            <input 
              name="Category"
              type="checkbox"
              id="prospective"
              value="prospective"
              onChange={e => {
                e.target.checked
                ? setCategory(category.concat(e.target.value))
                : setCategory(category.filter(val => val !== e.target.value))
              }}
            />
            <label htmlFor="prospective">Prospective Students</label>
          </div>
          <div>
            <input 
              name="Category"
              type="checkbox"
              id="incoming"
              value="incoming"
              onChange={e => {
                e.target.checked
                ? setCategory(category.concat(e.target.value))
                : setCategory(category.filter(val => val !== e.target.value))
              }}
            />
            <label htmlFor="incoming">Incoming Students</label>
          </div>
          <div>
            <input
              name="Category"
              type="checkbox"
              id="current"
              value="current"
              onChange={e => {
                e.target.checked
                ? setCategory(category.concat(e.target.value))
                : setCategory(category.filter(val => val !== e.target.value))
              }}
            />
            <label htmlFor="current">Current Students</label>
          </div>
        </fieldset>

        <div role="group">
          <label htmlFor="source"> Source </label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={e => setSource(e.target.value)}
          />
        </div>

        <button type='submit'> Submit </button> </>}
      </form>
    </div>
  )
}

export default Contribute;