import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get firstProductItem(): ElementFinder {
    return $('.product_img_link');
  }

  public openFirstProductDetail(): promise.Promise<void> {
    return this.firstProductItem.click();
  }
}
