import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (path) => {
    setIsOpen(false); // close dropdown
    setTimeout(() => {
      navigate(path); // navigate after state update
    }, 100);
  };

  return (
    <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      <span
        className="dropdown-toggle"
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleDropdown();
        }}
      >
        Our Services
      </span>

      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <button onClick={() => handleItemClick('/hotels')}>Hotels</button>
          </li>
          <li>
            <button onClick={() => handleItemClick('/guest-houses')}>Guest Houses</button>
          </li>
          <li>
            <button onClick={() => handleItemClick('/banquet-halls')}>Banquet Halls</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
