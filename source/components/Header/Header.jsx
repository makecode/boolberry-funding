import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Container from './../Container/Container';

class Header extends PureComponent {
  static propTypes = {
    logo: PropTypes.node,
    nav: PropTypes.array
  };

  static defaultProps = {
    nav: []
  };

  getNav = (links) => links.map((link, index) => {
    const target = link.blank ? '_blank' : '_self';

    return (
      <a className="navigation__link" href={link.href} target={target} key={index}>{link.title}</a>
    );
  });

  render() {
    const { logo, nav } = this.props;

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
              </nav>
              {/*<span className="hamburger" id="hamburger" />*/}
            </div>
          </div>
        </Container>
      </header>
    )
  }
}

export default Header;
