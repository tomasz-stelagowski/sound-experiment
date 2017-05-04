import { SoundExperimentPage } from './app.po';

describe('sound-experiment App', () => {
  let page: SoundExperimentPage;

  beforeEach(() => {
    page = new SoundExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
