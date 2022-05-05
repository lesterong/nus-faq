import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  let params = useParams();
  let currCat = params.currCat;

  return (
    <aside>
      <button 
        aria-label="Prospective Students"
        className={currCat === 'prospective' ? 'text-purple' : 'text-black'}
        onClick={() => navigate('../prospective')}
      > 
        Prospective Students 
      </button>
      <button
        aria-label="Incoming Students" 
        className={currCat === 'incoming' ? 'text-purple' : 'text-black'}
        onClick={() => navigate('../incoming')}
      > 
        Incoming Students
      </button>
      <button
        aria-label="Current Students"
        className={currCat === 'current' ? 'text-purple' : 'text-black'}
        onClick={() => navigate('../current')}
      > 
        Current Students 
      </button>
    </aside>
  )
};

export default Sidebar;