import React from 'react';
import './SideNavBar.scss';

class SideNavBar extends React.Component {
  render() {
    return (
      <div className="sidenavbar">
        <ul>
          <li className="active">Matchs</li>
          {/* <li>Bars</li> */}
        </ul>
      </div>
    );
  }
}

export default SideNavBar;
