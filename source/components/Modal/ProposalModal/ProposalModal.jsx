import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from '../../Button/Button';

class ProposalModal extends PureComponent {
  static propTypes = {
    verificationCode: PropTypes.string
  };

  static defaultProps = {
    verificationCode: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      alias: '',
      signature: ''
    }
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
      ver_string: this.props.verificationCode,
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

  submitSuccess = () => {
    const data = {
      title: this.state.title,
      description: this.state.description,
      alias: this.state.alias,
      ver_string: this.props.verificationCode,
      signature: this.state.signature
    };

    axios.post('https://boolberry.com/API/create_proposal.php', data)
      .then(() => {
        alert('Success');
      })
      .catch((error) => console.error(error))
  };

  render() {
    const { verificationCode } = this.props;
    const { title, description, alias, signature } = this.state;
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
