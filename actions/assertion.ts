import { Locator, expect } from '@playwright/test';

export async function verifyInputValue(inputLocator: Locator, expectedValue: string) {
  await expect(inputLocator).toHaveValue(expectedValue);
}

export async function waitForElementToBeVisible(locator: Locator) {
  await expect(locator).toBeVisible();
}

export async function waitForElementToBeNotVisible(locator: Locator) {
  await expect(locator).toBeHidden();
}
