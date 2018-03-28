import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';

class ContributeModal extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object
  };

  static defaultProps = {
    className: '',
    data: {}
  };


  render() {
    const { className } = this.props;

    return (
      <div className={`contribute-modal ${className}`}>
        <div className='modal__section modal__section column'>
          <span className='modal__input-description'>Title</span>
          <input type='text' className='modal__input'/>
        </div>

        <div className='modal__section column'>
          <span className='modal__input-description'>Description</span>
          <textarea rows='4' className='modal__text-area'/>
        </div>

        <div className='modal__section'>
          <span className='modal__input-description'>Alias Validation</span>
          <a className='modal__link' href='#'>What is it?</a>
        </div>

        <div className='modal__section'>
          <span className='modal__input-description'>Ver string</span>
          <span className=''>test</span>
        </div>

        <div className='modal__section'>
          <span className='modal__input-description'>Signature</span>
          <input className='modal__input-small' type='text'/>
        </div>

        <Button className='modal__submit'>Submit</Button>
      </div>
    )
  }
}

export default ContributeModal;
