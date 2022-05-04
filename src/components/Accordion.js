import Item from "./Item";
import faqService from "../services/faq";
import { useEffect, useState } from "react";

const Accordion = ({currCat}) => {
  const [faqs, setFaqs] = useState([]);

  const getFaq = () => {
    faqService.getAll().then((initial) => {
      setFaqs(initial);
    });
  };
  useEffect(getFaq, []);

  const faqsToShow = faqs.filter(x => x.category === currCat)

  return (
    <div className="mx-auto mt-3">
      {faqsToShow.map(faq => (
        <Item faq={faq} key={faq.id}/>
      ))}
    </div>
  );
}

export default Accordion;