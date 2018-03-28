import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { PROGRESS_MODAL, PROPOSAL_MODAL } from '../../framework/modals';
import ProposalModal from './ProposalModal/ProposalModal';
import ProgressModal from './ProgressModal/ProgressModal';

class ModalContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    titleModal: PropTypes.string,
    typeModal: PropTypes.string,
    dataModal: PropTypes.object,
    onClose: PropTypes.func
  };

  static defaultProps = {
    className: '',
    titleModal: '',
    typeModal: '',
    dataModal: {},
    onClose: () => {}
  };

  componentWillMount() {
    this.modal = document.createElement('div');
    document.body.appendChild(this.modal);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modal);
  }

  getModal = (type, data) => {
    switch (type) {
      case PROGRESS_MODAL:
        return <ProgressModal {...data} />
      case PROPOSAL_MODAL:
        return <ProposalModal {...data} />;

      default:
        return;
    }
  };

  render() {
    const { className, titleModal, typeModal, dataModal, onClose } = this.props;

    return (
      <div>
        {ReactDOM.createPortal(
          <div className='modal'>
            <div className={`modal__container ${className}`}>
              <div className='modal__header'>
                <span className='modal__title'>{titleModal}</span>
                <button type='button' className='modal__close' onClick={onClose} />
              </div>
              <div className='modal__body'>
                {this.getModal(typeModal, dataModal)}
              </div>
            </div>
          </div>,
          this.modal
        )}
      </div>
    )
  }
}

export default ModalContainer;
