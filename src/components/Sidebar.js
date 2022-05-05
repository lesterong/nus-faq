import { useNavigate, useParams } from "react-router-dom";

const Sidebar = ({currQuery}) => {
  let navigate = useNavigate();
  let params = useParams();
  let currCat = params.currCat;

  const appendQuery = !currQuery
    ? ''
    : `?q=${currQuery}`;

  return (
    <aside>
      <button 
        aria-label="Prospective Students"
        className={currCat === 'prospective' ? 'text-purple' : 'text-black'}
        onClick={() => navigate(`../prospective${appendQuery}`)}
      > 
        Prospective Students 
      </button>
      <button
        aria-label="Incoming Students" 
        className={currCat === 'incoming' ? 'text-purple' : 'text-black'}
        onClick={() => navigate(`../incoming${appendQuery}`)}
      > 
        Incoming Students
      </button>
      <button
        aria-label="Current Students"
        className={currCat === 'current' ? 'text-purple' : 'text-black'}
        onClick={() => navigate(`../current${appendQuery}`)}
      > 
        Current Students 
      </button>
    </aside>
  )
};

export default Sidebar;