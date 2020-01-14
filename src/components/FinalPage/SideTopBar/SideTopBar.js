import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideTopBar.scss';

class SideTopBar extends React.Component {
  render() {
    return (
      <div className="sidetopbar">
        <span className="header-title">
          <FontAwesomeIcon icon="beer" /> My Soulmates
        </span>
      </div>
    );
  }
}

export default SideTopBar;
