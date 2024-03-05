import React, { useState } from 'react';
import { EventData } from '../Pages/event';

interface DropDownMenuProps {
  eventsData: EventData[];
  onEventChange: (event: EventData) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ eventsData, onEventChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleEventChange = (event: EventData) => {
    onEventChange(event);
    toggleDropdown();
  };

  return (
    <div className="DropDownMenu" style={{ backgroundColor: '#011C1D', textAlign: 'right' , width:'100%',  zIndex: 99, position: 'fixed', top: 0, right: 0 }}>
      <div className='drop-down-sidebar'>
        {eventsData.map(event => (
          <button 
            key={event.id} 
            className="drop-down-sidebar-link" 
            onClick={() => handleEventChange(event)}
            style={{ 
              backgroundColor: '#011C1D',
              color: 'white',
              border: 'none',
              padding: '10px',
              margin: '5px',
              cursor: 'pointer',
            }}
          >
            {event.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DropDownMenu;