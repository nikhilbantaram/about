import { AboutPage } from './app.po';

describe('about App', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
