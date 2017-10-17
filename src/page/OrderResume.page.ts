import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get payoutResultTitleLabel(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getPayoutResultTitle(): promise.Promise<string> {
    return this.payoutResultTitleLabel.getText();
  }
}
