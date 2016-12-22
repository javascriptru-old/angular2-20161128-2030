import { Lesson6ServicesPage } from './app.po';

describe('lesson6-services App', function() {
  let page: Lesson6ServicesPage;

  beforeEach(() => {
    page = new Lesson6ServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
