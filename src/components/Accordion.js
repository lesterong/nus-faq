import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from './Item';
import faqService from '../services/faq';
import Spinner from '../assets/Spinner';
import categories from '../utils/categories';
import majors from '../utils/majors';

const Accordion = ({ currQuery }) => {
  let params = useParams();
  const { currCat, major } = params;
  const isValidCat = categories.includes(currCat);

  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState([]);
  const getFaq = () => {
    if (majors.includes(major)) {
      faqService.getAll(major)
        .then((res) => {
          let dataArray = [];
          res.forEach((childRes) => {
            dataArray[dataArray.length] = childRes.val();
          });
          setFaqs(dataArray);
          setLoading(false);
        });
    }
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
