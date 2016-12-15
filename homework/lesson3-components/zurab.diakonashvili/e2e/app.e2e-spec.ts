import { Homework3AppPage } from './app.po';

describe('homework3-app App', function() {
  let page: Homework3AppPage;

  beforeEach(() => {
    page = new Homework3AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
