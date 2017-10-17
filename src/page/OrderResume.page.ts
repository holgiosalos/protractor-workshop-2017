import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get payoutResultTitle(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getPayoutResultTitle(): promise.Promise<string> {
    return this.payoutResultTitle.getText();
  }
}
