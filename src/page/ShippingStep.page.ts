import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get termsOfServiceCheckbox(): ElementFinder {
    return $('#cgv');
  }

  private get checkoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  public agreeTOS(): promise.Promise<void> {
    return this.termsOfServiceCheckbox.click();
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
