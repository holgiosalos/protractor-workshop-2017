import { element, by, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get addToCartButton(): ElementFinder {
    return element(by.name('Submit'));
  }

  public addToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
