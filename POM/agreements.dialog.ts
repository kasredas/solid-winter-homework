import { AgreementsDialogLocators } from '../locators/agreementsDialog.locators';
import { waitForVisibilityAndClick } from '../actions/interaction';
import { waitForElementToBeNotVisible } from '../actions/assertion';

export class AgreementsDialog {
  constructor(
    private readonly loc: AgreementsDialogLocators,
  ) {}

  async rejectOptionalCookies() {
    await waitForVisibilityAndClick(this.loc.disagreeButton)
    await waitForElementToBeNotVisible(this.loc.agreementsDialog);

  }
}