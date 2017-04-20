import { OrcaPage } from './app.po';

describe('orca App', function() {
  let page: OrcaPage;

  beforeEach(() => {
    page = new OrcaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
