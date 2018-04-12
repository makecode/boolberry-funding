import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import Progress from '../../Progress/Progress';

class ContributeModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };


  render() {
    const { data } = this.props;
    const {
      title, proposed, progressFunding, contributorsTitle, contributorsCounter, description,
      address, paymentId, slackUrl
    } = data;

    return (
      <div className='modal-content contribute-modal'>
        <div className='modal-content__proposed'>
          <Icon ico='man' />
          <span>Proposed by {proposed}</span>
        </div>
        <div className='modal-content__title'>{title}</div>
        <Progress className='blue' progress={progressFunding.progress} title={progressFunding.description} />
        <div className='modal-content__contributors'>
          <span className='modal-content__contributors-name'>Contributors: {contributorsTitle} </span>
          <span className='modal-content__contributors-counter'>{contributorsCounter && (contributorsCounter)}</span>
        </div>
        <div className='modal-content__description'>{description}</div>

        <dl className='modal-content__list-values'>
          <dt>Address:</dt>
          <dd>{address}</dd>
        </dl>
        <dl className='modal-content__list-values'>
          <dt>Payment ID:</dt>
          <dd>{paymentId}</dd>
        </dl>
        <a className='modal-content__slack' href={slackUrl}>
          <Icon ico='slack' />
          <span>Task channel</span>
        </a>
        <div className='modal-content__footnote'>
          *Your contribution should be visible within 5 minutes, please contact the team if it’s not
        </div>
      </div>
    )
  }
}

export default ContributeModal;
