import { Page, Locator } from '@playwright/test';

export class BrowseNowPageLocators {
  readonly firstWallpaperBlock: Locator;
  readonly wallpaperBlocks: Locator;
  readonly premiumWallpaper: Locator;
  
  constructor(page: Page) {
    this.firstWallpaperBlock = page.locator('.aspect-wallpaper').first();
    this.wallpaperBlocks = page.locator('.Card_card__DE_00.aspect-wallpaper');
    this.premiumWallpaper = page.locator('.Card_card-header__itIwa');

  }
}