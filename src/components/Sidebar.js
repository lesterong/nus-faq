import { useNavigate, useParams } from "react-router-dom";

const Sidebar = ({currQuery}) => {
  let navigate = useNavigate();
  let params = useParams();
  let currCat = params.currCat;
  let major = params.major;
  const appendQuery = !currQuery
    ? ''
    : `?q=${currQuery}`;

  let baseBtnStyle = `
    shrink-0 text-left px-2 md:px-6 py-1 md:py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50
  `
  let activeBtnStyle;
  switch (major) {
    case 'cs':
      activeBtnStyle = "text-cs"
      baseBtnStyle += " focus-visible:ring-cs"
      break;
    default:
      break;
  }

  return (
    <aside>
      <button 
        aria-label="Prospective Students"
        className={`${currCat === 'prospective' ? activeBtnStyle : 'text-black'} ${baseBtnStyle}`}
        onClick={() => navigate(`../${major}/prospective${appendQuery}`)}
      > 
        Prospective Students 
      </button>
      <button
        aria-label="Incoming Students" 
        className={`${currCat === 'incoming' ? activeBtnStyle : 'text-black'} ${baseBtnStyle}`}
        onClick={() => navigate(`../${major}/incoming${appendQuery}`)}
      > 
        Incoming Students
      </button>
      <button
        aria-label="Current Students"
        className={`${currCat === 'current' ? activeBtnStyle : 'text-black'} ${baseBtnStyle}`}
        onClick={() => navigate(`../${major}/current${appendQuery}`)}
      > 
        Current Students 
      </button>
    </aside>
  )
};

export default Sidebar;