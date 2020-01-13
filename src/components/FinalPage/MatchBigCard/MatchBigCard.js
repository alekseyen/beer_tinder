import React from 'react';
import PropTypes from 'prop-types';
import './MatchBigCard.scss';
import MatchTips from '../MatchTips';
import Image from '../../../assets/kastel.jpg';

class MatchBigCard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    no: PropTypes.instanceOf(Function),
    yes: PropTypes.instanceOf(Function),
  };

  static defaultProps = {
    name: 'No more beers',
    image: Image,
    no: () => {},
    yes: () => {},
  };

  render() {
    const {
      name,
      image,
      no,
      yes,
    } = this.props;
    return (
      <div className="matchbigcard-rec-center">
        <div className="matchbigcard-content-rectangle">
          <div
            className="matchbigcard"
            style={{ backgroundImage: `url('${image}')` }}
          >
            <span className="matchbigcard-text-description">{name}</span>
          </div>
          <MatchTips
            no={no}
            yes={yes}
          />
        </div>
      </div>
    );
  }
}

export default MatchBigCard;
