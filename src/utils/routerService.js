import URI from 'urijs';

const {
  REACT_APP_ARTICLES = 'articles/'
} = window.ENV;

export default class RouterService {
  constructor(basePath) {
    this.basePath = basePath;
  }

  static get articles() {
    return URI(this.basePath).segment(REACT_APP_ARTICLES).toString();
  }
}
