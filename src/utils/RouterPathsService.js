import URI from 'urijs';

const {
  REACT_APP_AUTH = 'auth/',
  REACT_APP_ARTICLES = 'articles/',
  REACT_APP_GRIDS = 'grids/',
  REACT_APP_CHARTS = 'charts/'
} = window.ENV;

// TODO: provide DRY principle
export default class RouterPathsService {
  static createPath(segment) {
    return URI(this.basePath).segment(segment).toString();
  }

  constructor(basePath) {
    this.basePath = basePath;
  }

  get auth() {
    return URI(this.basePath).segment(REACT_APP_AUTH).toString();
  }

  get articles() {
    return URI(this.basePath).segment(REACT_APP_ARTICLES).toString();
  }

  get grids() {
    return URI(this.basePath).segment(REACT_APP_GRIDS).toString();
  }

  get charts() {
    return URI(this.basePath).segment(REACT_APP_CHARTS).toString();
  }
}
