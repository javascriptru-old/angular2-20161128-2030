import { Homework4Page } from './app.po';

describe('homework4 App', function() {
  let page: Homework4Page;

  beforeEach(() => {
    page = new Homework4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
