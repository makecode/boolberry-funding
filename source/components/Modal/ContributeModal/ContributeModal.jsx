import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Icon from '../../Icon/Icon';
import Progress from '../../Progress/Progress';

@translate(['common'], {wait: true})
class ContributeModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    t: PropTypes.func
  };

  static defaultProps = {
    data: {},
    t: () => {}
  };


  render() {
    const { data, t } = this.props;
    const {
      title, proposed, progressFunding, contributorsTitle, contributorsCounter, description,
      address, paymentId, slackUrl
    } = data;

    return (
      <div className='modal-content contribute-modal'>
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

        <dl className='modal-content__list-values'>
          <dt>{t('modal.address')}:</dt>
          <dd>{address}</dd>
        </dl>
        <dl className='modal-content__list-values'>
          <dt>{t('modal.payment')}:</dt>
          <dd>{paymentId}</dd>
        </dl>
        <a className='modal-content__slack' href={slackUrl}>
          <Icon ico='slack' />
          <span>{t('modal.channel')}</span>
        </a>
        <div className='modal-content__footnote'>
          {t('modal.modalDescription')}
        </div>
      </div>
    )
  }
}

export default ContributeModal;
