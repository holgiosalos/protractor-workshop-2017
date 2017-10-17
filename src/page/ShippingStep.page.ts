import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get termsOfServiceCheckbox(): ElementFinder {
    return $('#cgv');
  }

  private get checkoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  public async agreeTOSAndProceedToCheckout(): Promise<void> {
    await this.termsOfServiceCheckbox.click();
    await this.checkoutButton.click();
  }
}
