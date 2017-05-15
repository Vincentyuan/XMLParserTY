import { XMLParserTYPage } from './app.po';

describe('xmlparser-ty App', () => {
  let page: XMLParserTYPage;

  beforeEach(() => {
    page = new XMLParserTYPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
