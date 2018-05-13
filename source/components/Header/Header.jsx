import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Container from './../Container/Container';
import Lang from './../Lang/Lang';

@translate(['common'], {wait: true})
class Header extends PureComponent {
  static propTypes = {
    logo: PropTypes.node,
    nav: PropTypes.array,
    activeLang: PropTypes.string,
    languages: PropTypes.object,
    onLanguageClick: PropTypes.func,
    t: PropTypes.func
  };

  static defaultProps = {
    nav: [],
    t: () => {}
  };

  getNav = (links) => links.map((link, index) => {
    const target = link.blank ? '_blank' : '_self';

    return (
      <a className="navigation__link" href={link.href} target={target} key={index}>{link.title}</a>
    );
  });

  render() {

    const { logo, activeLang, languages, onLanguageClick, t } = this.props;
    const langProps = { activeLang, languages, onLanguageClick };
    const nav = [
      {
        title: t('nav.0'),
        href: '#progress'
      },
      {
        title: t('nav.1'),
        href: '#funding'
      },
      {
        title: t('nav.2'),
        href: '#proposals'
      },
      {
        title: t('nav.3'),
        href: 'http://boolberry.com/',
        blank: true
      }
    ];

    return (
      <header className='header'>
        <Container>
          <div className="header__wrap">
            <div className="header__left">
              <div className="logo logo_small">
                <a className="logo__link" href="http://boolberry.com/" target="_self">
                  <img className="logo__image" src={logo} />
                </a>
              </div>
            </div>
            <div className="header__right">
              <nav className="navigation">
                {nav.length ? this.getNav(nav) : false}
                <Lang {...langProps} />
              </nav>
              {/*<span className="hamburger" id="hamburger" />*/}
            </div>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
