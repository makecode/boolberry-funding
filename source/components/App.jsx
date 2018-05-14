import React, { Component } from 'react';
import { translate } from 'react-i18next';

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

@translate(['common'], {wait: true})
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
    const { t } = this.props;
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

    const footerColumns = [
      {
        title: t('footer.0.title'),
        items: [
          {
            name: t('footer.0.items.0'),
            href: 'https://boolberry.com/#what-is',
            blank: true
          },
          {
            name: t('footer.0.items.1'),
            href: 'https://boolberry.com/#papers',
            blank: true
          },
          {
            name: t('footer.0.items.2'),
            href: 'https://boolberry.com/#markets',
            blank: true
          },
          {
            name: t('footer.0.items.3'),
            href: 'https://boolberry.com/#roadmap',
            blank: true
          },
          {
            name: t('footer.0.items.4'),
            href: 'https://boolberry.com/#join-us',
            blank: true
          },
          // {
          //   name: 'Contributors',
          //   href: 'https://boolberry.com/#contributors',
          //   blank: true
          // },
          // {
          //   name: 'Downloads',
          //   href: '#',
          //   blank: true
          // },
          // {
          //   name: 'Specs',
          //   href: '#',
          //   blank: true
          // }
        ]
      },
      {
        title: t('footer.1.title'),
        items: [
          {
            name: t('footer.1.items.0'),
            href: '#progress',
          },
          {
            name: t('footer.1.items.1'),
            href: '#funding',
          },
          {
            name: t('footer.1.items.2'),
            href: '#proposals',
          },
          // {
          //   name: 'Archive',
          //   href: '#',
          //   blank: true
          // }
        ]
      },
      {
        title: t('footer.2.title'),
        items: [
          {
            name: t('footer.2.items.0'),
            href: 'https://boolberry.com/state.html',
            blank: true
          },
          {
            name: t('footer.2.items.1'),
            href: 'https://explorer.mining.blue/en/',
            blank: true
          },

          {
            name: t('footer.2.items.2'),
            href: 'https://github.com/cryptozoidberg/boolberry',
            blank: true
          },
          {
            name: t('footer.2.items.3'),
            href: 'https://github.com/cryptozoidberg/boolberry/releases/',
            blank: true
          }
        ]
      },
      {
        title: 'Knowlege base',
        items: [
          {
            name: 'How to',
            href: 'https://boolberry.com/howto.html',
            blank: true
          },
          //     {
          //       name: 'Get started',
          //       href: '#',
          //       blank: true
          //     },
          //     {
          //       name: 'User guide',
          //       href: '#',
          //       blank: true
          //     },
          //     {
          //       name: 'Mining guide',
          //       href: '#',
          //       blank: true
          //     },
          //     {
          //       name: 'Dev guide/Api guide',
          //       href: '#',
          //       blank: true
          //     }
        ]
      },
      {
        title: t('footer.3.title'),
        items: [
          {
            name: t('footer.3.items.0'),
            href: 'https://bitcointalk.org/index.php?topic=577267',
            icon: 'icon-bitcointalk',
            blank: true
          },
          {
            name: t('footer.3.items.1'),
            href: 'https://join.slack.com/t/boolberry/shared_invite/enQtMzQ3OTQ3MzgzNjcxLTBlYmRlMmRlMmNkNzk1NDk4NGMxMThhYmZkM2FlODQ0ZDBhM2FkYjIzZjJlNzA2MWMxOTZmZDA0NGZlNzg5YzY',
            icon: 'icon-slack',
            blank: true
          },

          {
            name: t('footer.3.items.2'),
            href: 'https://t.me/boolberry',
            icon: 'icon-telegram',
            blank: true
          },
          {
            name: t('footer.3.items.3'),
            href: 'https://twitter.com/BoolberryBBR',
            icon: 'icon-twitter',
            blank: true
          },
          {
            name: t('footer.3.items.3'),
            href: 'https://www.reddit.com/r/boolberry/',
            icon: 'icon-reddit',
            blank: true
          }
        ]
      },
    ];

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
