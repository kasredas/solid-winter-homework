import { Page } from '@playwright/test';
import { AgreementsDialogLocators } from '../locators/agreementsDialog.locators';
import { waitForVisibilityAndClick } from '../actions/interaction';
import { waitForElementToBeNotVisible } from '../actions/assertion';

export class AgreementsDialog {
  constructor(
    private readonly page: Page,
    private readonly loc: AgreementsDialogLocators,
  ) {}

  async rejectOptionalCookies() {
    await waitForVisibilityAndClick(this.page, this.loc.disagreeButton);
    await waitForElementToBeNotVisible(this.loc.agreementsDialog);
  }
}
