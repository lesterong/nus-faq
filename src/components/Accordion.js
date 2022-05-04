import Item from "./Item";
import faqService from "../services/faq";
import { useEffect, useState } from "react";

const Accordion = ({currCat, currQuery}) => {
  const [faqs, setFaqs] = useState([]);

  const getFaq = () => {
    faqService.getAll().then((initial) => {
      setFaqs(initial);
    });
  };
  useEffect(getFaq, []);

  const faqsToSearch = faqs.filter(x => x.question.toLowerCase().includes(currQuery.toLowerCase()))
  const faqsToShow = faqsToSearch.filter(x => x.category.includes(currCat))

  return (
    <div className="mx-auto mt-3">
      {faqsToShow.length === 0 && <p> No results found. </p>}
      {faqsToShow.map(q => (
        <Item q={q} currQuery={currQuery} key={q.question} />
      ))}
    </div>
  );
}

export default Accordion;