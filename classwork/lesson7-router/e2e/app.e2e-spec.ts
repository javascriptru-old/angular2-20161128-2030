import { Lesson7RouterPage } from './app.po';

describe('lesson7-router App', function() {
  let page: Lesson7RouterPage;

  beforeEach(() => {
    page = new Lesson7RouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
