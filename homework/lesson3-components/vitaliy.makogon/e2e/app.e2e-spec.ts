import { VitaliyPage } from './app.po';

describe('vitaliy App', function() {
  let page: VitaliyPage;

  beforeEach(() => {
    page = new VitaliyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
