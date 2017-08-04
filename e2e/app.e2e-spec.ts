import { ZoutlyFrontendPage } from './app.po';

describe('zoutly-frontend App', () => {
  let page: ZoutlyFrontendPage;

  beforeEach(() => {
    page = new ZoutlyFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
