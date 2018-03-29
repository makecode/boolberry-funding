import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from './../Container/Container';

const getLi = (list) => list.map((li, index) => {
  const target = li.blank ? '_blank' : '_self';

  return (
    <li className="list__el" key={index}>
      <a className="list__link" href={li.href} target={target}>
        {li.icon ? (<span className={`list__icon ${li.icon}`} />) : false}
        <span className='list__text'>{li.name}</span>
      </a>
    </li>
  );
});

const getColumns = (cols) => cols.map((col, index) => {
  const { title, items } = col;

  return (
    <div className="footer__col" key={index}>
      <h3 className="footer__title">{title}</h3>
      <ul className="list">
        {items.length ? getLi(items) : false}
      </ul>
    </div>
  );
});

const Footer = (props) => {
  const { columns } = props;

  return (
    <footer className='footer'>
      <Container>
        <div className="footer__wrap">
          {getColumns(columns)}
          <div className="copyright">© 2018 Boolberry.com</div>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  columns: PropTypes.array
};

Footer.defaultProps = {
  columns: []
};

export default Footer;
