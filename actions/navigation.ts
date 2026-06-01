import { expect, Page } from '@playwright/test';

export async function waitForUrl(page: Page, expectedUrl: string|RegExp) {
  await expect(page).toHaveURL(expectedUrl);
  await waitForFullyLoadedPage(page);
}

export async function navigateToHomePage(page: Page) {
  await page.goto('/');
  await waitForFullyLoadedPage(page);
}

export async function waitForFullyLoadedPage(page: Page) {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
}
