import React from 'react';
import SideTopBar from '../SideTopBar';
import SideNavBar from '../SideNavBar';
import SideContent from '../SideContent';
import './SideBar.scss';

class SideBar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <SideTopBar />
        <SideNavBar />
        <SideContent />
      </aside>
    );
  }
}

export default SideBar;
