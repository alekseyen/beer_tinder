import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Match from '../Match';
import './SideContent.scss';

class SideContent extends React.Component {
  static propTypes = {
    matches: PropTypes.arrayOf(Object).isRequired,
  }

  render() {
    const { matches } = this.props;
    const matchesJSX = matches.map(match => (
      <Match
        key={match.id}
        name={match.name}
        image={match.image}
      />
    ));
    return (
      <div className="sidecontent">
        {matchesJSX}
      </div>
    );
  }
}

const mapStateToProps = state => ({ matches: state.matchedBeers });

export default connect(mapStateToProps)(SideContent);
