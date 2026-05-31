import { Page, Locator } from '@playwright/test';

export class AgreementsDialogLocators {
  readonly disagreeButton: Locator;
  readonly agreementsDialog: Locator;

  constructor(page: Page) {
    this.disagreeButton = page.locator('.didomi-disagree-button');
    this.agreementsDialog = page.locator('.didomi-popup-container');
  }
}