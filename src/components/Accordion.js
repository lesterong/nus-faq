import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from './Item';
import faqService from '../services/faq';
import Spinner from '../assets/Spinner';
import Categories from '../utils/Categories';

const Accordion = ({ currQuery }) => {
  let params = useParams();
  const { currCat, major } = params;
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState([]);

  const isValidCat = Categories.includes(currCat);

  const getFaq = () => {
    faqService.getAll(major).then((initial) => {
      if (initial[`${major}`]) {
        setFaqs(initial[`${major}`]);
      }
      setLoading(false);
    });
  };
  useEffect(getFaq, [major]);

  const faqsToShow = !currQuery
    ? faqs.filter((x) => x.category.includes(currCat))
    : faqs.filter((x) => x.question.toLowerCase().includes(currQuery.toLowerCase()))
      .filter((x) => x.category.includes(currCat));

  return (
    <div className="mx-auto mt-3">
      {loading && (
        <div>
          <Spinner major={major} />
          <p className="text-center">
            Loading&nbsp;
            {major.toUpperCase()}
            &nbsp;FAQs
          </p>
        </div>
      )}

      {!isValidCat && (
        <p>
          Select a category from the
          <span className="md:inline hidden"> sidebar on the left. </span>
          <span className="md:hidden inline"> bar at the top. </span>
        </p>
      )}
      {faqsToShow.length === 0 && isValidCat && !loading && <p> No results found. </p>}
      {faqsToShow.map((q) => (
        <Item q={q} currQuery={currQuery} key={q.id} />
      ))}
    </div>
  );
};

export default Accordion;
