import { ModulesPage } from './app.po';

describe('modules App', () => {
  let page: ModulesPage;

  beforeEach(() => {
    page = new ModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
