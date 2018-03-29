import React, { Component } from 'react';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import Funding from './Funding/Funding';
import Footer from './Footer/Footer';
import ModalContainer from './Modal/ModalContainer';

import { headerNavLinks, footerColumns } from '../framework/constants';
import logo from './../media/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      titleModal: '',
      typeModal: '',
      dataModal: {}
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      titleModal: '',
      typeModal: '',
      dataModal: {}
    });
  };

  showModal = (title, type, data) => {
    this.setState({
      showModal: true,
      titleModal: title,
      typeModal: type,
      dataModal: data
    });
  };

  render() {
    const { showModal, titleModal, typeModal, dataModal } = this.state;
    const modalProps = {
      titleModal,
      typeModal,
      dataModal,
      title: 'Modal',
      onClose: this.closeModal
    };

    return (
      <div className='app'>
        <Header logo={logo} nav={headerNavLinks} />
        <Hero />
        <Funding showModal={this.showModal} />
        <Footer columns={footerColumns} />
        {showModal && <ModalContainer {...modalProps} />}
      </div>
    )
  }
}

export default App;
