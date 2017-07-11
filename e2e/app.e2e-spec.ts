import { MoodigoFrontendPage } from './app.po';

describe('moodigo-frontend App', () => {
  let page: MoodigoFrontendPage;

  beforeEach(() => {
    page = new MoodigoFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
