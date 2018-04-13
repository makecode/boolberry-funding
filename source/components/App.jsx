import React, { Component } from 'react';

import Header from './Header/Header';
// import Hero from './Hero/Hero';
import Funding from './Funding/Funding';
import Footer from './Footer/Footer';
import ModalContainer from './Modal/ModalContainer';

import { headerNavLinks, footerColumns } from '../framework/constants';
import logo from './../media/logo.svg';
import ObjectUtils from '../framework/ObjectUtils';
import axios from 'axios/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      titleModal: '',
      typeModal: '',
      dataModal: {},
      tableData: {}
    }
  }

  componentDidMount() {
    this.updateTableData();
  }

  updateTableData = () => {
    axios.get('https://boolberry.com/API/get_proposal.php')
      .then((response) => {
        const data = ObjectUtils.transformTableData(response.data);

        this.setState(() => ({
          tableData: data
        }))
      })
      .catch((error) => console.error(error));
  };

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
    const { showModal, titleModal, typeModal, dataModal, tableData } = this.state;
    const modalProps = {
      titleModal,
      typeModal,
      dataModal,
      title: 'Modal',
      onClose: this.closeModal,
      updateData: this.updateTableData
    };

    const fundingProps = {
      tableData,
      showModal: this.showModal
    };

    return (
      <div className='app'>
        <Header logo={logo} nav={headerNavLinks} />
        {/*<Hero />*/}
        <Funding {...fundingProps} />
        <Footer columns={footerColumns} />
        {showModal && <ModalContainer {...modalProps} />}
      </div>
    )
  }
}

export default App;
