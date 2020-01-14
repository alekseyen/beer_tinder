import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MatchChoose.scss';
import MatchBigCard from '../MatchBigCard';
import { matchBeer, selectNextBeer } from '../../../actions';
import 'bootstrap/dist/css/bootstrap.min.css';

class MatchChoose extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    no: PropTypes.instanceOf(Function).isRequired,
    yes: PropTypes.instanceOf(Function).isRequired,
  };

  render() {
    const {
      name,
      image,
      no,
      yes,
      id,
    } = this.props;
    return (
      <main className="main-content">
        <MatchBigCard
          name={name}
          image={image}
          yes={() => (yes(id))}
          no={() => no()}
        />
      </main>
    );
  }
}

const mapStateToProps = state => (
  {
    name: state.activeOne.name,
    image: state.activeOne.image,
    id: state.activeOne.id,
  });

export default connect(
  mapStateToProps,
  { no: selectNextBeer, yes: matchBeer },
)(MatchChoose);
