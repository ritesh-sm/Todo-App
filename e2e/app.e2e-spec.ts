import { RiteshToDosPage } from './app.po';

describe('ritesh-to-dos App', function() {
  let page: RiteshToDosPage;

  beforeEach(() => {
    page = new RiteshToDosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
