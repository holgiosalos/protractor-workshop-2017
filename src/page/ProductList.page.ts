import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get firstProduct(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public openFirstProductDetail(): promise.Promise<void> {
    return this.firstProduct.click();
  }
}
