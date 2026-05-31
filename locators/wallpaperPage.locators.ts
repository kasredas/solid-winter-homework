import { Page, Locator } from '@playwright/test';

export class WallpaperPageLocators {
  readonly downloadButton: Locator;

  constructor(page: Page) {
    this.downloadButton = page.getByRole('button', { name: 'Download' })
  }
}