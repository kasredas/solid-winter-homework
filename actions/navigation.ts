import { expect, Page } from '@playwright/test';

export async function waitForUrl(page: Page, expectedUrl: string|RegExp) {
  await expect(page).toHaveURL(expectedUrl, {timeout: 10000});
  await page.waitForLoadState('domcontentloaded');
}

export async function navigateToHomePage(page: Page) {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
}


