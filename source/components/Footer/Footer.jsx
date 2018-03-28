import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from './../Container/Container';

class Footer extends PureComponent {
  static propTypes = {
    columns: PropTypes.array
  };

  static defaultProps = {
    columns: []
  };

  getLi = (list) => list.map((li, index) => {
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

  getColumns = (cols) => cols.map((col, index) => {
    const { title, items } = col;

    return (
      <div className="footer__col" key={index}>
        <h3 className="footer__title">{title}</h3>
        <ul className="list">
          {items.length ? this.getLi(items) : false}
        </ul>
      </div>
    );
  });

  render() {
    const { columns } = this.props;

    return (
      <footer className='footer'>
        <Container>
          <div className="footer__wrap">
            {this.getColumns(columns)}
            <div className="copyright">© 2018 Boolberry.com</div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer;