import { SubscriptionManagementUiPage } from './app.po';

describe('subscription-management-ui App', function() {
  let page: SubscriptionManagementUiPage;

  beforeEach(() => {
    page = new SubscriptionManagementUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
