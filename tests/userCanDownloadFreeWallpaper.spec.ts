import { navigateToHomePage } from '../actions/navigation';
import { test } from '../fixtures/pages.fixture';

test.describe('Wallpaper Suite', () => {
  test('User can download free wallpaper', async ({ page, agreementsDialog, homePage, browseNowPage, headerBlock, wallpaperPage }) => {
    const searchKeyword = 'Hello';

    await test.step('Open page ', async () => {
      await navigateToHomePage(page);
    });

    await test.step('Reject Optional Cookies', async () => {
      await agreementsDialog.rejectOptionalCookies();
    });

    await test.step('Navigate to Browse Now', async () => {
      await homePage.navigateToBrowseNow();
    });
    
    await test.step('Search for wallpapers by keyword', async () => {
      await headerBlock.searchByKeyword(searchKeyword);
    });

    await test.step('Open free wallpaper', async () => {
      await browseNowPage.openFirstFreeWallpaper();
    });

    await test.step('Download free wallpaper', async () => {
      await wallpaperPage.downloadWallpaper();
    });
  });
});
