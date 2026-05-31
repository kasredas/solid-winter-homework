import { Page } from '@playwright/test';
import { HomePageLocators } from '../locators/homePage.locators';
import { waitForVisibilityAndClick } from '../actions/interaction';
import { waitForUrl } from '../actions/navigation';

export class HomePage {
  constructor(
    private readonly page: Page,
    private readonly loc: HomePageLocators,
  ) {}

  async navigateToBrowseNow() {
    await waitForVisibilityAndClick(this.loc.browseNowButton)
    await waitForUrl(this.page, /ringtones-and-wallpapers/);
  }
}