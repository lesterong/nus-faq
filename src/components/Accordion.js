import Item from "./Item";
import faqService from "../services/faq";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Accordion = ({currQuery}) => {
  let params = useParams();
  let currCat = params.currCat;

  const isValidCat = currCat === 'prospective' || currCat === 'incoming' || currCat === 'current';

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
      {!isValidCat && <p> 
        Select a category from the 
        <span className="md:inline hidden"> sidebar on the left. </span>
        <span className="md:hidden inline"> bar at the top. </span>
      </p>}
      {faqsToShow.length === 0 && isValidCat && <p> No results found. </p>}
      {faqsToShow.map(q => (
        <Item q={q} currQuery={currQuery} key={q.question} />
      ))}
    </div>
  );
}

export default Accordion;