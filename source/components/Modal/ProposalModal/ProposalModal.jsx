import React, { PureComponent } from 'react';
import axios from 'axios';

import Button from '../../Button/Button';
import Session from '../../../framework/SessionStorage';

class ProposalModal extends PureComponent {
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
          alert('Something wrong. Try again.')
        }
      })
      .catch(() => {
        alert('Something wrong. Try again.')
      })
  };

  submitSuccess = () => {
    const data = {
      title: this.state.title,
      description: this.state.description,
      alias: this.state.alias,
      ver_string: this.state.verificationCode,
      signature: this.state.signature
    };

    axios.post('https://boolberry.com/API/create_proposal.php', data)
      .then(() => {
        alert('Success');
      })
      .catch((error) => console.error(error))
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

  render() {
    const { title, description, alias, signature, verificationCode } = this.state;

    return (
      <div className='modal-content proposal-modal'>
        <form onSubmit={this.handleSubmit}>
          <dl className='modal-content__list-values column'>
            <dt>Title</dt>
            <dd>
              <input type='text' value={title} onChange={this.handleChangeTitle} className='modal-content__input'/>
            </dd>
          </dl>

          <dl className='modal-content__list-values column'>
            <dt>Description</dt>
            <dd>
              <textarea rows='4' value={description} onChange={this.handleChangeDescription} className='modal-content__text-area'/>
            </dd>
          </dl>

          <dl className='modal-content__list-values'>
            <dt>Alias Validation</dt>
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
            <dt>Ver string</dt>
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

export default ProposalModal;
