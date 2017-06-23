import { TB2Page } from './app.po';

describe('tb2 App', () => {
  let page: TB2Page;

  beforeEach(() => {
    page = new TB2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
