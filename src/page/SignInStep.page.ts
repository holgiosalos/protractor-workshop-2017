import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get emailField(): ElementFinder {
    return $('#email');
  }

  private get passwordField(): ElementFinder {
    return $('#passwd');
  }

  private get submitButton(): ElementFinder {
    return $('#SubmitLogin');
  }

  public async login(user: string, pass: string): Promise<void> {
    await this.emailField.sendKeys(user);
    await this.passwordField.sendKeys(pass);
    await this.submitButton.click();
  }
}
