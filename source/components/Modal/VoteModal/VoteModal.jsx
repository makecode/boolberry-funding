import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';

class VoteModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };

  renderUpvoted = (title, counter) => (
    <div className='modal-content__upvoted'>
      <span>Upvoted by: <Icon ico='man' /> {`${title} ${counter}`}</span>
    </div>
  );


  render() {
    const { data } = this.props;
    const { proposed, title, description, verString, votes, upvotedTitle, upvotedCounter } = data;

    return (
      <div className='modal-content vote-modal'>
        <div className='modal-content__proposed'>
          <Icon ico='man' />
          <span>Proposed by {proposed}</span>
        </div>
        <div className='modal-content__title'>
          {title}
          {votes && <span className='modal-content__votes'>{votes} Votes</span>}
        </div>
        {(upvotedTitle && upvotedCounter) && this.renderUpvoted(upvotedTitle, upvotedCounter)}
        <div className='modal-content__description'>{description}</div>
        <dl className='modal-content__list-values'>
          <dt>Alias Validation:</dt>
          <dd>
            <a className='modal-content__link' href='#'>What is it?</a>
          </dd>
        </dl>
        <dl className='modal-content__list-values'>
          <dt>Ver string:</dt>
          <dd>{verString}</dd>
        </dl>
        <dl className='modal-content__list-values'>
          <dt>Signature</dt>
          <dd>
            <input className='modal-content__input-small' type='text'/>
          </dd>
        </dl>
        <Button className='modal-content__submit'>Submit</Button>
      </div>
    )
  }
}

export default VoteModal;
