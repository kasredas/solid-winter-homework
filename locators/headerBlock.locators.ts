import { Page, Locator } from '@playwright/test';

export class HeaderBlockLocators {
  readonly searchInput: Locator;
  readonly searchSubmitButton: Locator;

  constructor(page: Page) {
    this.searchInput = page.locator('nav input#search');
    this.searchSubmitButton = page.locator('nav button[type="submit"]');
  }
}
