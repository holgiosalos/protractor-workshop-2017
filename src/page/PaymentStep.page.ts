import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get bankWireButton(): ElementFinder {
    return $('.bankwire');
  }

  public payByBankWire(): promise.Promise<void> {
    return this.bankWireButton.click();
  }
}
