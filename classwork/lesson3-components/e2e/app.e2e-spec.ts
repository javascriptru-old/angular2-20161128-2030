import { Lesson3ComponentsPage } from './app.po';

describe('lesson3-components App', function() {
  let page: Lesson3ComponentsPage;

  beforeEach(() => {
    page = new Lesson3ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
