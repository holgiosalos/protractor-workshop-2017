import { $, element, by, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get termsOfServiceCheckbox(): ElementFinder {
    return $('#cgv');
  }

  private get checkoutButton(): ElementFinder {
    return element(by.name('processCarrier'));
  }

  public async agreeTOSAndProceedToCheckout(): Promise<void> {
    await this.termsOfServiceCheckbox.click();
    await this.checkoutButton.click();
  }
}
