import { Lesson8UnitTestsPage } from './app.po';

describe('lesson8-unit-tests App', function() {
  let page: Lesson8UnitTestsPage;

  beforeEach(() => {
    page = new Lesson8UnitTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
