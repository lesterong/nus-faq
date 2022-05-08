import { useNavigate, useParams } from 'react-router-dom';
import categories from '../utils/categories';
import styleScheme from '../utils/styleScheme';

const Sidebar = ({ currQuery }) => {
  let navigate = useNavigate();
  let { major, currCat } = useParams();
  const { textColor, sidebarBtnStyle } = styleScheme[major];

  const appendQuery = currQuery
    ? `?q=${currQuery}`
    : '';

  return (
    <aside>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${currCat === cat && textColor} ${sidebarBtnStyle}`}
          type="button"
          aria-label={`${cat} students`}
          onClick={() => navigate(`../${major}/${cat}${appendQuery}`)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
          &nbsp;Students
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
