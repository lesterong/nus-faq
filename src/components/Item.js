import { useState } from "react";
import Arrow from "../assets/Arrow";
import parse from 'html-react-parser';
import Highlight from "./Highlighter";

const Item = ({q, currQuery}) => {
  const [isOpen, setIsOpen] = useState(false);
  const question = q.question;
  const answer = parse(q.answer);
  const source = q.source || [];
  const mappedSource = source.map(s => (
    `<small key=${s}> <a href=${s} rel='noreferrer noopener nofollow' target='_blank'>source</a></small>`
  ))
  let strSource = ''
  for (let i = 0; i < mappedSource.length; ++i) {
    strSource += mappedSource[i] 
    if (i !== mappedSource.length - 1) {
      strSource += '<small>,</small>'
    }
  }
  const resultSource = parse(strSource);

  return (
    <div className="item">
      <button aria-label="item-title" className="item-title" onClick={() => setIsOpen(!isOpen)}> 
        <h2> <Highlight query={currQuery || ""} text={question} /> </h2>
        <Arrow isOpen={isOpen} />
      </button>
      {isOpen && 
      <div className="item-body"> 
      {answer}
      <p> {resultSource} </p>
      </div>}
    </div>
  )
}

export default Item;