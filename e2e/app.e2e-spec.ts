import { WebAppCapecPage } from './app.po';

describe('web-app-capec App', () => {
  let page: WebAppCapecPage;

  beforeEach(() => {
    page = new WebAppCapecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
