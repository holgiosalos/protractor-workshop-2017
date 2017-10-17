import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get bankWireButton(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public payByBankWire(): promise.Promise<void> {
    return this.bankWireButton.click();
  }
}
