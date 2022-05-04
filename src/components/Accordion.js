import Item from "./Item";
import faqService from "../services/faq";
import { useEffect, useState } from "react";

const Accordion = () => {
  const [faqs, setFaqs] = useState([]);

  const getFaq = () => {
    faqService.getAll().then((initial) => {
      setFaqs(initial);
    });
  };
  useEffect(getFaq, []);

  return (
    <div className="mx-auto mt-3">
      {faqs.map(faq => (
        <Item faq={faq} key={faq.id}/>
      ))}
    </div>
  );
}

export default Accordion;