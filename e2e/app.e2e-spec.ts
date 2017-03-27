import { AngularclitestPage } from './app.po';

describe('angularclitest App', () => {
  let page: AngularclitestPage;

  beforeEach(() => {
    page = new AngularclitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
