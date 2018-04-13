import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';
import Session from '../../../framework/SessionStorage';
import axios from 'axios/index';

import { VERIFICATION_CODE_KEY } from '../../../framework/constants';

class VoteModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    closeModal: PropTypes.func,
    updateData: PropTypes.func
  };

  static defaultProps = {
    data: {},
    closeModal: () => {},
    updateData: () => {}
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
    if (Session.has(VERIFICATION_CODE_KEY)) {
      const code = Session.get(VERIFICATION_CODE_KEY);

      this.setState(() => ({
        verificationCode: code
      }));
    } else {
      axios.get('https://boolberry.com/API/gen_string.php')
        .then((response) => {
          const code = response.data.result;
          Session.set(VERIFICATION_CODE_KEY, code);

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
      .then((response) => {
        const status = response.data.result.status;

        if (status === 'OK') {
          this.submitSuccess();
        } else {
          alert('Something wrong. Try again.')
        }
      })
      .catch(() => {
        alert('Something wrong. Try again.')
      })
  };


  submitSuccess = () => {
    const { data: dataRow, closeModal/*, updateData*/ } = this.props;
    const { id } = dataRow;
    const data = {
      id,
      alias: this.state.alias,
      type: 'vote'
    };

    axios.post('https://boolberry.com/API/doAJAX.php', data)
      .then(() => {
        closeModal();
        Session.clear(VERIFICATION_CODE_KEY);

        window.location.reload();
        // setTimeout(updateData, 1000);
      })
      .catch((error) => console.error(error))
  };

  renderUpvotedBy = (items) => {
    const string = items.map((el) => el.alias).join(', ');

    return (
      <div className='modal-content__upvoted-list'>
        <span>Upvoted by: <Icon ico='man' /> {string}</span>
      </div>
    )
  };

  render() {
    const { data } = this.props;
    const { alias, signature, verificationCode } = this.state;
    const { proposed, title, description, votes, upvotedBy } = data;

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
        {upvotedBy.length ? this.renderUpvotedBy(upvotedBy) : false}
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
