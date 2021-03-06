import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private get checkoutButton(): ElementFinder {
    return $('.button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.checkoutButton));
    await this.checkoutButton.click();
  }
}
