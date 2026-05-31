import { Page } from '@playwright/test';
import { HomePageLocators } from '../locators/homePage.locators';
import { waitForVisibilityAndClick } from '../actions/interaction';
import { waitForFullyLoadedPage, waitForUrl } from '../actions/navigation';
import { waitForElementToBeNotVisible } from '../actions/assertion';

export class HomePage {
  constructor(
    private readonly page: Page,
    private readonly loc: HomePageLocators,
  ) {}

  async navigateToBrowseNow() {
    await waitForFullyLoadedPage(this.page);
    await waitForVisibilityAndClick(this.page, this.loc.browseNowButton)
    await waitForElementToBeNotVisible(this.loc.browseNowButton);  
    await waitForUrl(this.page, /ringtones-and-wallpapers/);
  }
}