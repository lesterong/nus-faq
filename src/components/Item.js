import { useState } from "react";
import Arrow from "../assets/Arrow";

const Item = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="item" onClick={() => setIsOpen(!isOpen)}>
      <header className="flex items-center place-content-between"> 
        <h2> Question </h2>
        <Arrow isOpen={isOpen} />
      </header>
      {isOpen && <p> Answer </p>}
    </div>
  )
}

export default Item;