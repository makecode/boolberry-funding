import React from 'react';
import PropTypes from 'prop-types';

import Container from './../Container/Container';

const getNav = (links) => links.map((link, index) => {
  const target = link.blank ? '_blank' : '_self';

  return (
    <a className="navigation__link" href={link.href} target={target} key={index}>{link.title}</a>
  );
});

const Header = (props) => {
  const { logo, nav } = props;

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
              {nav.length ? getNav(nav) : false}
            </nav>
            {/*<span className="hamburger" id="hamburger" />*/}
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.node,
  nav: PropTypes.array
};

Header.defaultProps = {
  nav: []
};

export default Header;
