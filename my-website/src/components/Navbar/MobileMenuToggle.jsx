import React from 'react';

const MobileMenuToggle = ({ toggle }) => (
  <div
    className="menu-icon"
    onClick={toggle}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && toggle()}
  >
    ☰
  </div>
);

export default MobileMenuToggle;
