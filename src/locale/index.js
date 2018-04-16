import * as languages from './languages';

const DEFAULT_LANGUAGE = 'EN';

class Translate {
  constructor(lang = DEFAULT_LANGUAGE) {
    this.setLanguage(lang);
  }

  setLanguage = (lang) => {
    this.lang = languages[lang] ? lang : DEFAULT_LANGUAGE;
  };

  translate = str => languages[this.lang][str] || str;
}

export default Translate;
