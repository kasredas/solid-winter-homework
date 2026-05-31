import { Page } from '@playwright/test';
import { HeaderBlockLocators } from '../locators/headerBlock.locators';
import { verifyInputValue, waitForElementToBeVisible } from '../actions/assertion';
import { fillSearchInput, waitForVisibilityAndClick } from '../actions/interaction';
import { waitForFullyLoadedPage, waitForUrl } from '../actions/navigation';

export class HeaderBlock {
  constructor(
    private readonly page: Page,
    private readonly loc: HeaderBlockLocators,
  ) {}

  async searchByKeyword(keyword: string) {
    await waitForFullyLoadedPage(this.page);
    await waitForElementToBeVisible(this.loc.searchInput);
    await fillSearchInput(this.loc.searchInput, keyword);
    await waitForVisibilityAndClick(this.page, this.loc.searchSubmitButton);
    await waitForFullyLoadedPage(this.page);
    await waitForUrl(this.page, new RegExp(`find/${keyword}`));
  }

  async verifySearchInputValue(expectedValue: string) {
    await verifyInputValue(this.loc.searchInput, expectedValue);
  }
}