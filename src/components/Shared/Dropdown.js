import React, {useState} from 'react';
import "../../styles/Dropdown.css"
import Arrow from "../Icon/Arrow";

const DropdownMenu = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Переключаем состояние меню
  };

  return (
    <div className="dropdown"  onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      <button className="dropdown-button">
        {children} <Arrow/>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            Post Header
          </li>
          <li className="dropdown-item">
            Post Layout
          </li>
          <li className="dropdown-item">
            Share Buttons
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
