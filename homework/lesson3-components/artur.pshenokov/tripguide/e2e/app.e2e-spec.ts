import { TripguidePage } from './app.po';

describe('tripguide App', function() {
  let page: TripguidePage;

  beforeEach(() => {
    page = new TripguidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
