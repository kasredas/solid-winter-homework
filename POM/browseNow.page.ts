import { Page } from '@playwright/test';
import { BrowseNowPageLocators } from '../locators/browseNowPage.locators';
import { waitForElementToBeNotVisible, waitForElementToBeVisible } from '../actions/assertion';
import { waitForUrl } from '../actions/navigation';
import { waitForVisibilityAndClick } from '../actions/interaction';
import { printWallpaperTypes, getFirstFreeWallpaperElement } from '../actions/wallpapers';

export class BrowseNowPage {
  constructor(
    private readonly page: Page,
    private readonly loc: BrowseNowPageLocators,
  ) {}

  async verifyWallpaperSearchResultsVisible() {
    await waitForElementToBeVisible(this.loc.firstWallpaperBlock);
  }

  async verifyWallpaperTypes() {
    await printWallpaperTypes(this.loc.wallpaperBlocks, this.loc.premiumWallpaper);
  }

  async openFirstFreeWallpaper() {
    const firstFreeWallpaperElement = await getFirstFreeWallpaperElement(this.loc.wallpaperBlocks, this.loc.premiumWallpaper);
    await waitForVisibilityAndClick(this.page, firstFreeWallpaperElement);
    await waitForElementToBeNotVisible(this.loc.wallpapersViewAllLink);
    await waitForUrl(this.page, /wallpapers/);
  }
}