import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';

class ProgressModal extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object
  };

  static defaultProps = {
    className: '',
    data: {}
  };


  render() {
    const { className, data } = this.props;
    const { taskChanelLink } = data;

    return (
      <div className={`progress-modal ${className}`}>
        <a className='progress-modal__link' href={taskChanelLink}>
          <Icon ico='slack' />
          <span className='progress-modal__link-tesdt'>Task channel</span>
        </a>
      </div>
    )
  }
}

export default ProgressModal;
