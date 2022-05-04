import { useState } from "react";
import Arrow from "../assets/Arrow";

const Item = ({faq}) => {
  const [isOpen, setIsOpen] = useState(false);
  const question = faq.question;
  const answer = faq.answer;

  return (
    <div className="item" onClick={() => setIsOpen(!isOpen)}>
      <header className="flex items-center place-content-between"> 
        <h2> {question} </h2>
        <Arrow isOpen={isOpen} />
      </header>
      {isOpen && <p> {answer} </p>}
    </div>
  )
}

export default Item;