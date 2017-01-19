import { Lesson10GoingdeepPage } from './app.po';

describe('lesson10-goingdeep App', function() {
  let page: Lesson10GoingdeepPage;

  beforeEach(() => {
    page = new Lesson10GoingdeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
