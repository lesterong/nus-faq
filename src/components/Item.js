import { useState } from "react";
import Arrow from "../assets/Arrow";
import parse from 'html-react-parser';
import Highlight from "./Highlighter";

const Item = ({q, currQuery}) => {
  const [isOpen, setIsOpen] = useState(false);
  const question = q.question;
  const answer = parse(q.answer);

  return (
    <div className="item">
      <header onClick={() => setIsOpen(!isOpen)}> 
        <h2> <Highlight query={currQuery} text={question} /> </h2>
        <Arrow isOpen={isOpen} />
      </header>
      {isOpen && <p> {answer} </p>}
    </div>
  )
}

export default Item;