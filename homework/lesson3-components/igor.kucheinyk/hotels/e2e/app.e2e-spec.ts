import { HotelsPage } from './app.po';

describe('hotels App', function() {
  let page: HotelsPage;

  beforeEach(() => {
    page = new HotelsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
