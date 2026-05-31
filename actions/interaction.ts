import { Locator, expect, Page } from '@playwright/test';

export async function waitForVisibilityAndClick(page: Page,locator: Locator) {
  await locator.waitFor({ state: 'visible' });
  await expect(locator).toBeVisible();
  await expect(locator).toBeEnabled();
  await locator.hover();
  // await locator.click();
  await Promise.all([
    page.waitForLoadState('networkidle'),
    locator.click(),
  ]);
}

export async function fillSearchInput(searchInput: Locator, keyword: string) {
  await expect(searchInput).toBeVisible();
  await searchInput.pressSequentially(keyword);
}

export async function submitSearch(locator: Locator) {
  await expect(locator).toBeVisible();
  await locator.click();
}
