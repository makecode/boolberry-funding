import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { PROGRESS_MODAL, CONTRIBUTE_MODAL, VOTE_MODAL, PROPOSAL_MODAL } from '../../framework/modals';

import ProposalModal from './ProposalModal/ProposalModal';
import ContributeModal from './ContributeModal/ContributeModal';
import VoteModal from './VoteModal/VoteModal';
import ProgressModal from './ProgressModal/ProgressModal';

class ModalContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    titleModal: PropTypes.string,
    typeModal: PropTypes.string,
    dataModal: PropTypes.object,
    onClose: PropTypes.func,
    updateData: PropTypes.func,

    //toastr
    showSuccessToastr: PropTypes.func,
    showErrorToastr: PropTypes.func
  };

  static defaultProps = {
    className: '',
    titleModal: '',
    typeModal: '',
    dataModal: {},
    onClose: () => {},
    updateData: () => {}
  };

  componentWillMount() {
    this.modal = document.createElement('div');
    document.body.appendChild(this.modal);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modal);
  }

  getModal = (type, data) => {
    const { onClose, updateData, showSuccessToastr, showErrorToastr } = this.props;

    switch (type) {
      case PROGRESS_MODAL:
        return <ProgressModal {...data} />;
      case CONTRIBUTE_MODAL:
        return <ContributeModal {...data} />;
      case VOTE_MODAL:
        return <VoteModal {...data} closeModal={onClose} updateData={updateData} showSuccessToastr={showSuccessToastr} showErrorToastr={showErrorToastr} />;
      case PROPOSAL_MODAL:
        return <ProposalModal {...data} closeModal={onClose} updateData={updateData} showSuccessToastr={showSuccessToastr} showErrorToastr={showErrorToastr} />;
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
              <span className='modal__shadow' />
            </div>
          </div>,
          this.modal
        )}
      </div>
    )
  }
}

export default ModalContainer;
