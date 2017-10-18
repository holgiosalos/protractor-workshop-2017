import { element, by, ElementFinder, promise } from 'protractor';

export class MenuContentPage {
  private get tShirtMenu(): ElementFinder {
    return element(by.linkText('T-SHIRTS'));
  }

  public goToTShirtMenu(): promise.Promise<void> {
    return this.tShirtMenu.click();
  }
}
