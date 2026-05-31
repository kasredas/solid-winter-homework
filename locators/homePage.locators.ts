import { Page, Locator } from '@playwright/test';

export class HomePageLocators {
  readonly browseNowButton: Locator;

  constructor(page: Page) {
    this.browseNowButton = page.locator('nav a.text-dark-white\\/60[href="/ringtones-and-wallpapers"]');
  }
}