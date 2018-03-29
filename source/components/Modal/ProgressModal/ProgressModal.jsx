import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import Progress from '../../Progress/Progress';

class ProgressModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };

  getMilestones = (milestones) => milestones.map((milestone, index) => {
    const {status, title, description} = milestone;

    return (
      <div className='milestone' key={index}>
        <div className='milestone__left'><Icon ico={status} /></div>
        <div className='milestone__right'>
          <p className='milestone__title'>{title}</p>
          <p className='milestone__description'>{description}</p>
        </div>
      </div>
    );
  });

  render() {
    const { data } = this.props;
    const {
      title, proposed, contributorsTitle, contributorsCounter,
      description, progressFunding, progressDevelopment, milestones, slackUrl
    } = data;

    return (
      <div className='modal-content progress-modal'>
        <div className='modal-content__proposed'>
          <Icon ico='man' />
          <span>Proposed by {proposed}</span>
        </div>
        <div className='modal-content__title'>{title}</div>
        <Progress className='blue' progress={progressFunding.progress} title={progressFunding.description} />
        <div className='modal-content__contributors'>
          <span className='modal-content__contributors-name'>Contributors: {contributorsTitle} </span>
          <span className='modal-content__contributors-counter'>({contributorsCounter})</span>
        </div>
        <div className='modal-content__description'>{description}</div>
        <Progress progress={progressDevelopment.progress} title={progressDevelopment.description} />
        <div className='milestones'>
          {milestones.length && this.getMilestones(milestones)}
        </div>
        <a className='modal-content__slack' href={slackUrl}>
          <Icon ico='slack' />
          <span>Task channel</span>
        </a>
      </div>
    )
  }
}

export default ProgressModal;
