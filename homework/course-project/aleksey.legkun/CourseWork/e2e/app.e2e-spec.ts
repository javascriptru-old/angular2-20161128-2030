import { CourseWorkPage } from './app.po';

describe('course-work App', function() {
  let page: CourseWorkPage;

  beforeEach(() => {
    page = new CourseWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
