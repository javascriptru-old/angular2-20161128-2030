import { Lesson4DirectivesPage } from './app.po';

describe('lesson4-directives App', function() {
  let page: Lesson4DirectivesPage;

  beforeEach(() => {
    page = new Lesson4DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
