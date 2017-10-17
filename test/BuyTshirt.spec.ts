import { $, browser } from 'protractor';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productList: ProductListPage = new ProductListPage();
  const productDetail: ProductDetailPage = new ProductDetailPage();
  const productAddedModal: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStep: SummaryStepPage = new SummaryStepPage();
  const signInStep: SignInStepPage = new SignInStepPage();
  const addressStep: AddressStepPage = new AddressStepPage();
  const shippingStep: ShippingStepPage = new ShippingStepPage();
  const paymentStep: PaymentStepPage = new PaymentStepPage();
  const bankPayment: BankPaymentPage = new BankPaymentPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productList.openFirstProductDetail();
    await (browser.sleep(3000));
    await productDetail.addToCart();
    await (browser.sleep(3000));
    await productAddedModal.proceedToCheckout();
    await (browser.sleep(3000));
    await summaryStep.proceedToCheckout();
    await (browser.sleep(3000));

    await signInStep.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(3000));

    await addressStep.proceedToCheckout();
    await (browser.sleep(3000));

    await shippingStep.agreeTOS();
    await (browser.sleep(3000));

    await shippingStep.proceedToCheckout();
    await (browser.sleep(3000));
    await paymentStep.payByBankWire();
    await (browser.sleep(3000));
    await bankPayment.confirmOrder();
    await (browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
