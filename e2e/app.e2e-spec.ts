import { SglRebuildPage } from './app.po';

describe('sgl-rebuild App', () => {
  let page: SglRebuildPage;

  beforeEach(() => {
    page = new SglRebuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
