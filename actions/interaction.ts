import { Locator, expect } from '@playwright/test';

export async function waitForVisibilityAndClick(locator: Locator) {
  await expect(locator).toBeEnabled();
  await expect(locator).toBeVisible();
  await locator.hover();
  await locator.click();
}

export async function fillSearchInput(searchInput: Locator, keyword: string) {
  await searchInput.fill(keyword);
}

export async function submitSearch(locator: Locator) {
  await expect(locator).toBeVisible();
  await locator.click();
}
