import { element, by, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get checkoutButton(): ElementFinder {
    return element(by.name('processAddress'));
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.checkoutButton.click();
  }
}
