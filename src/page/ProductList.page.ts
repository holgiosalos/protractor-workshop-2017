import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get firstProductItem(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public openFirstProductDetail(): promise.Promise<void> {
    return this.firstProductItem.click();
  }
}
