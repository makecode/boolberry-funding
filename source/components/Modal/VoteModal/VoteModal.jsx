import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';
import Session from '../../../framework/SessionStorage';
import axios from 'axios/index';

class VoteModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      alias: '',
      signature: '',
      verificationCode: ''
    }
  }

  componentDidMount() {
    this.getVerificationCode();
  }

  renderUpvoted = (title, counter) => (
    <div className='modal-content__upvoted'>
      <span>Upvoted by: <Icon ico='man' /> {`${title} ${counter}`}</span>
    </div>
  );

  handleChangeAlias = (event) => {
    const value = event.target.value;

    this.setState(() => ({
      alias: value
    }))
  };

  handleChangeSignature = (event) => {
    const value = event.target.value;

    this.setState(() => ({
      signature: value
    }))
  };

  getVerificationCode = () => {
    if (Session.has('verCode')) {
      const code = Session.get('verCode');

      this.setState(() => ({
        verificationCode: code
      }));
    } else {
      axios.get('https://boolberry.com/API/gen_string.php')
        .then((response) => {
          const code = response.data.result;
          Session.set('verCode', code);

          this.setState(() => ({
            verificationCode: code
          }));
        })
        .catch((error) => console.error(error));
    }
  };


  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    const data = {
      alias: this.state.alias,
      ver_string: this.state.verificationCode,
      signature: this.state.signature
    };

    axios.post('https://boolberry.com/API/validate.php', data)
      .then(() => {
        this.submitSuccess();
      })
      .catch(() => {
        alert('Something wrong. Try again.')
      })
  };

  render() {
    const { data } = this.props;
    const { alias, signature, verificationCode } = this.state;
    const { proposed, title, description, votes, upvotedTitle, upvotedCounter } = data;

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
        <form onSubmit={this.handleSubmit}>
          <dl className='modal-content__list-values'>
            <dt>Alias Validation:</dt>
            <dd>
              <a className='modal-content__link' href='#'>What is it?</a>
            </dd>
          </dl>
          <dl className='modal-content__list-values'>
            <dt>Alias</dt>
            <dd>
              <input value={alias} onChange={this.handleChangeAlias} className='modal-content__input-small' type='text'/>
            </dd>
          </dl>
          <dl className='modal-content__list-values'>
            <dt>Ver string:</dt>
            <dd>{verificationCode}</dd>
          </dl>
          <dl className='modal-content__list-values'>
            <dt>Signature</dt>
            <dd>
              <input value={signature} onChange={this.handleChangeSignature} className='modal-content__input-small' type='text'/>
            </dd>
          </dl>
          <Button className='modal-content__submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default VoteModal;
