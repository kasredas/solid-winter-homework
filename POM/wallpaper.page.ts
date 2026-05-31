import { Page } from '@playwright/test';
import { WallpaperPageLocators } from '../locators/wallpaperPage.locators';
import { downloadAndGetFileName, verifyWallpaperDownloaded } from '../actions/wallpapers';

export class WallpaperPage {
  constructor(
    private readonly page: Page,
    private readonly loc: WallpaperPageLocators,
  ) {}

  async downloadWallpaper() {
    const downloadFileName = await downloadAndGetFileName(this.loc.downloadButton);
    await verifyWallpaperDownloaded(downloadFileName);
  }
}