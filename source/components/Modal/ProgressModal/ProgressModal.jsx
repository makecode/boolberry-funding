import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Icon from '../../Icon/Icon';
import Progress from '../../Progress/Progress';

@translate(['common'], {wait: true})
class ProgressModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    t: PropTypes.func
  };

  static defaultProps = {
    data: {},
    t: () => {}
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
    const { data, t } = this.props;
    const {
      title, proposed, contributorsTitle, contributorsCounter,
      description, progressFunding, progressDevelopment, milestones, slackUrl
    } = data;

    return (
      <div className='modal-content progress-modal'>
        <div className='modal-content__proposed'>
          <Icon ico='man' />
          <span>{t('common.proposed')} {proposed}</span>
        </div>
        <div className='modal-content__title'>{title}</div>
        <Progress className='blue' progress={progressFunding.progress} title={progressFunding.description} />
        <div className='modal-content__contributors'>
          <span className='modal-content__contributors-name'>{t('modal.contributors')}: {contributorsTitle} </span>
          <span className='modal-content__contributors-counter'>{contributorsCounter && (contributorsCounter)}</span>
        </div>
        <div className='modal-content__description'>{description}</div>
        <Progress progress={progressDevelopment.progress} title={progressDevelopment.description} />
        <div className='milestones'>
          {milestones.length && this.getMilestones(milestones)}
        </div>
        <a className='modal-content__slack' href={slackUrl}>
          <Icon ico='slack' />
          <span>{t('modal.channel')}</span>
        </a>
      </div>
    )
  }
}

export default ProgressModal;
