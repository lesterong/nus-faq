const Sidebar = ({currCat, setCat}) => (
  <aside>
    <p className={currCat === 'prospective' ? 'text-purple' : 'text-black'} onClick={() => setCat('prospective')}> 
      Prospective Students 
    </p>
    <p className={currCat === 'incoming' ? 'text-purple' : 'text-black'} onClick={() => setCat('incoming')}> 
      Incoming Students
    </p>
    <p className={currCat === 'current' ? 'text-purple' : 'text-black'} onClick={() => setCat('current')}> 
      Current Students 
    </p>
  </aside>
);

export default Sidebar;