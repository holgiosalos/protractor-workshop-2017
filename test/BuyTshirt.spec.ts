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

describe('Given I open a shopping page', () => {
  beforeAll(async() => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When I want to buy a t-shirt', () => {
    beforeAll(async() => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productList: ProductListPage = new ProductListPage();
      const productDetail: ProductDetailPage = new ProductDetailPage();
      const productAddedModal: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStep: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productList.openFirstProductDetail();
      await productDetail.addToCart();
      await productAddedModal.proceedToCheckout();
      await summaryStep.proceedToCheckout();
    });

    describe('And I log in into the shopping page', () => {
      beforeAll(async() => {
        const signInStep: SignInStepPage = new SignInStepPage();
        await signInStep.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('And I select the address by default', () => {
        beforeAll(async() => {
          const addressStep: AddressStepPage = new AddressStepPage();
          const shippingStep: ShippingStepPage = new ShippingStepPage();

          await addressStep.proceedToCheckout();
          await shippingStep.agreeTOSAndProceedToCheckout();
        });

        describe('And I select the bank wire pay option', async() => {
          beforeAll(async() => {
            const paymentStep: PaymentStepPage = new PaymentStepPage();
            const bankPayment: BankPaymentPage = new BankPaymentPage();

            await paymentStep.payByBankWire();
            await bankPayment.confirmOrder();
          });

          it('then should be bought a t-shirt', async () => {
            const orderResume: OrderResumePage = new OrderResumePage();
            await expect(orderResume.getPayoutResultTitle())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
