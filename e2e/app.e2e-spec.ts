import { MprjGsiMovimentacaoLayoutPage } from './app.po';

describe('mprj-gsi-movimentacao-layout App', () => {
  let page: MprjGsiMovimentacaoLayoutPage;

  beforeEach(() => {
    page = new MprjGsiMovimentacaoLayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
