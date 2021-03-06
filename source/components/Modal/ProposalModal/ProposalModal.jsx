import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { translate } from 'react-i18next';

import Button from '../../Button/Button';
import Session from '../../../framework/SessionStorage';
import { VERIFICATION_CODE_KEY } from '../../../framework/constants';

@translate(['common'], {wait: true})
class ProposalModal extends PureComponent {
  static propTypes = {
    closeModal: PropTypes.func,
    updateData: PropTypes.func,

    //toastr
    showSuccessToastr: PropTypes.func,
    showErrorToastr: PropTypes.func,

    //localization
    t: PropTypes.func
  };

  static defaultProps = {
    closeModal: () => {},
    updateData: () => {},
    t: () => {}
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

  handleChangeTitle = (event) => {
    const value = event.target.value;

    this.setState(() => ({
      title: value
    }))
  };

  handleChangeDescription = (event) => {
    const value = event.target.value;

    this.setState(() => ({
      description: value
    }))
  };

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
          this.props.showErrorToastr('', 'Something wrong. Try again.');
        }
      })
      .catch(() => {
        this.props.showErrorToastr('', 'Something wrong. Try again.');
      })
  };

  submitSuccess = () => {
    const { closeModal, updateData } = this.props;

    const data = {
      title: this.state.title,
      description: this.state.description,
      alias: this.state.alias,
      ver_string: this.state.verificationCode,
      signature: this.state.signature
    };

    axios.post('https://boolberry.com/API/create_proposal.php', data)
      .then(() => {
        this.props.showSuccessToastr('Congratulation!', 'Your proposal submitted.');
        closeModal();
        Session.clear(VERIFICATION_CODE_KEY);
        updateData();
      })
      .catch(() => {
        this.props.showErrorToastr('', 'Something wrong. Try again.');
      })
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
        .catch(() => {
          this.props.showErrorToastr('', 'Error with get verification code.');
        });
    }
  };

  render() {
    const { t } = this.props;
    const { title, description, alias, signature, verificationCode } = this.state;

    return (
      <div className='modal-content proposal-modal'>
        <form onSubmit={this.handleSubmit}>
          <dl className='modal-content__list-values column'>
            <dt>{t('modal.title')}</dt>
            <dd>
              <input type='text' value={title} onChange={this.handleChangeTitle} className='modal-content__input'/>
            </dd>
          </dl>

          <dl className='modal-content__list-values column'>
            <dt>{t('modal.description')}</dt>
            <dd>
              <textarea rows='4' value={description} onChange={this.handleChangeDescription} className='modal-content__text-area'/>
            </dd>
          </dl>

          <dl className='modal-content__list-values'>
            <dt>{t('modal.validation')}</dt>
            <dd>
              <a className='modal-content__link' href='https://medium.com/@BoolberryBBR/participating-in-bbip-2827375fa7ee' target='_blank'>What is it?</a>
            </dd>
          </dl>

          <dl className='modal-content__list-values'>
            <dt>{t('modal.alias')}</dt>
            <dd>
              <input value={alias} onChange={this.handleChangeAlias} className='modal-content__input-small' type='text'/>
            </dd>
          </dl>

          <dl className='modal-content__list-values'>
            <dt>{t('modal.verification')}</dt>
            <dd>{verificationCode}</dd>
          </dl>

          <dl className='modal-content__list-values'>
            <dt>{t('modal.signature')}</dt>
            <dd>
              <input value={signature} onChange={this.handleChangeSignature} className='modal-content__input-small' type='text'/>
            </dd>
          </dl>

          <Button className='modal-content__submit'>{t('modal.buttons.submit')}</Button>
        </form>
      </div>
    )
  }
}

export default ProposalModal;
