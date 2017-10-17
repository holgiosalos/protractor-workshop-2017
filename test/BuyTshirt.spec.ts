import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductDetailPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage
} from '../src/page';

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
  const orderResume: OrderResumePage = new OrderResumePage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await productList.openFirstProductDetail();
    await productDetail.addToCart();
    await productAddedModal.proceedToCheckout();
    await summaryStep.proceedToCheckout();

    await signInStep.login('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addressStep.proceedToCheckout();
    await shippingStep.agreeTOSAndProceedToCheckout();
    await paymentStep.payByBankWire();
    await bankPayment.confirmOrder();

    await expect(orderResume.getPayoutResultTitle()).toBe('Your order on My Store is complete.');
  });
});
