import { ResumePlayPage } from './app.po';

describe('resume-play App', () => {
  let page: ResumePlayPage;

  beforeEach(() => {
    page = new ResumePlayPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
