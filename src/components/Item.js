import { useState } from "react";
import Arrow from "../assets/Arrow";
import parse from 'html-react-parser';

const Item = ({faq}) => {
  const [isOpen, setIsOpen] = useState(false);
  const question = faq.question;
  const answer = parse(faq.answer);

  return (
    <div className="item">
      <header className="flex items-center place-content-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}> 
        <h2> {question} </h2>
        <Arrow isOpen={isOpen} />
      </header>
      {isOpen && <p> {answer} </p>}
    </div>
  )
}

export default Item;