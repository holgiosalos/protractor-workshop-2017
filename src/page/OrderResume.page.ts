import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get payoutResultTitleLabel(): ElementFinder {
    return $('.cheque-indent strong');
  }

  public getPayoutResultTitle(): promise.Promise<string> {
    return this.payoutResultTitleLabel.getText();
  }
}
