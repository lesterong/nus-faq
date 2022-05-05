const Sidebar = ({currCat, setCat}) => (
  <aside>
    <button aria-label="Prospective Students" className={currCat === 'prospective' ? 'text-purple' : 'text-black'} onClick={() => setCat('prospective')}> 
      Prospective Students 
    </button>
    <button aria-label="Incoming Students" className={currCat === 'incoming' ? 'text-purple' : 'text-black'} onClick={() => setCat('incoming')}> 
      Incoming Students
    </button>
    <button aria-label="Current Students" className={currCat === 'current' ? 'text-purple' : 'text-black'} onClick={() => setCat('current')}> 
      Current Students 
    </button>
  </aside>
);

export default Sidebar;