import { Lesson9FormsPage } from './app.po';

describe('lesson9-forms App', function() {
  let page: Lesson9FormsPage;

  beforeEach(() => {
    page = new Lesson9FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
