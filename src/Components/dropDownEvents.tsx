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
    <div className="DropDownMenu">
      <div className='drop-down-sidebar'>
        {eventsData.map(event => (
          <button key={event.id} className="drop-down-sidebar-link" onClick={() => handleEventChange(event)}>{event.name}</button>
        ))}
      </div>
    </div>
  );
}

export default DropDownMenu;