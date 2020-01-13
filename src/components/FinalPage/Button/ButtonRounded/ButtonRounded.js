import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ButtonRounded.scss';

class ButtonRounded extends React.Component {
  static propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: { color: 'grey' },
  }

  render() {
    const { style, icon, onClick } = this.props;
    return (
      <div className="button-container">
        <button
          className="button-rounded"
          type="button"
          style={style}
          onClick={onClick}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
      </div>
    );
  }
}

export default ButtonRounded;
