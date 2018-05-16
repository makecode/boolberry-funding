import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Lang extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    languages: PropTypes.object,
    activeLang: PropTypes.string,
    onLanguageClick: PropTypes.func
  };

  static defaultProps = {
    className: '',
    languages: {},
    activeLang: '',
    onLanguageClick: () => {}
  };

  renderLanguagesList = () => {
    const { languages, onLanguageClick } = this.props;
    const langKeys = Object.keys(languages);
    const langs = [];

    for (let i = 0; i < langKeys.length; i += 1) {
      const lang = languages[langKeys[i]];
      const { menuText } = lang;

      langs.push(
        <li className='lang__el' key={i} onClick={() => onLanguageClick(langKeys[i])}>
          {menuText}
        </li>
      );
    }

    return langs;
  };

  render() {
    const {className, languages, activeLang} = this.props;

    return (
      <div className={`lang ${className}`}>
        <span className='lang__active'>{languages[activeLang].activeText}</span>
        <span className='lang__icon' />
        <ul className='lang__list'>
          {this.renderLanguagesList()}
        </ul>
      </div>
    )
  }
}

export default Lang;
