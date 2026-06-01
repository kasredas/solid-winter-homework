import { navigateToHomePage } from '../actions/navigation';
import { test } from '../fixtures/pages.fixture';

test.describe('Wallpaper Suite', () => {
  test('User can identify free vs premium wallpapers', {
    tag: '@wallpaper'
  }, async ({ page, agreementsDialog, homePage, browseNowPage, headerBlock }) => {
    const searchKeyword = 'Abstract';

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

    await test.step('Identify wallpaper types', async () => {
      await browseNowPage.verifyWallpaperTypes();
    });
  });
});

