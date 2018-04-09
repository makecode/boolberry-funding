import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';

class ProposalModal extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };


  render() {

    return (
      <div className='modal-content proposal-modal'>
        <dl className='modal-content__list-values column'>
          <dt>Title</dt>
          <dd>
            <input type='text' className='modal-content__input'/>
          </dd>
        </dl>

        <dl className='modal-content__list-values column'>
          <dt>Description</dt>
          <dd>
            <textarea rows='4' className='modal-content__text-area'/>
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
            <input className='modal-content__input-small' type='text'/>
          </dd>
        </dl>

        <dl className='modal-content__list-values'>
          <dt>Ver string</dt>
          <dd>test</dd>
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

export default ProposalModal;
