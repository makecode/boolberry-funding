import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
// import Hero from './Hero/Hero';
import Funding from './Funding/Funding';
import Footer from './Footer/Footer';
import ModalContainer from './Modal/ModalContainer';

import LocalStorage from '../framework/LocalStorage';
import { LANG_KEY, languages, footerColumns } from '../framework/constants';
import logo from './../media/logo.svg';
import ObjectUtils from '../framework/ObjectUtils';
import axios from 'axios/index';
import i18n from '../../i18n';

class App extends Component {
  constructor(props) {
    super(props);
    let initialLang = LocalStorage.get(LANG_KEY);

    this.state = {
      activeLang: initialLang || 'en',
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

  onLanguageClick = (lang) => {
    this.setState(() => ({
      activeLang: lang
    }));

    LocalStorage.set(LANG_KEY, lang);
    i18n.changeLanguage(lang);
  };

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
    const { activeLang, showModal, titleModal, typeModal, dataModal, tableData } = this.state;
    const headerProps = {
      activeLang,
      onLanguageClick: this.onLanguageClick,
      logo: logo,
      languages: languages
    };

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
        <Header {...headerProps} />
        {/*<Hero />*/}
        <Funding {...fundingProps} />
        <Footer columns={footerColumns} />
        {showModal && <ModalContainer {...modalProps} />}
      </div>
    )
  }
}

export default App;
