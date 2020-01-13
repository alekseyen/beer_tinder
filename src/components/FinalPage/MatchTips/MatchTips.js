import React from 'react';
import PropTypes from 'prop-types';
import './MatchTips.scss';
import ButtonRounded from '../Button/ButtonRounded';

class MatchTips extends React.Component {
  static propTypes = {
    yes: PropTypes.instanceOf(Function).isRequired,
    no: PropTypes.instanceOf(Function).isRequired,
  }

  render() {
    const { no, yes } = this.props;
    return (
      <div className="matchtips">
        <ButtonRounded
          style={{ color: 'red' }}
          icon="times"
          onClick={() => no()}
        />
        <ButtonRounded
          style={{ color: 'lightgreen' }}
          icon="heart"
          onClick={() => yes()}
        />
      </div>
    );
  }
}

export default MatchTips;
