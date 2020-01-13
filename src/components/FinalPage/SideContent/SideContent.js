import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Match from '../Match';
import './SideContent.scss';

class SideContent extends React.Component {
  static propTypes = {
    matchs: PropTypes.arrayOf(Object).isRequired,
  }

  render() {
    const { matchs } = this.props;
    const matchsJSX = matchs.map(match => (
      <Match
        key={match.id}
        name={match.name}
        image={match.image}
      />
    ));
    return (
      <div className="sidecontent">
        {matchsJSX}
      </div>
    );
  }
}

const mapStateToProps = state => ({ matchs: state.matchedBeers });

export default connect(mapStateToProps)(SideContent);
