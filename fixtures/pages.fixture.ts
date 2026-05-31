import { test as base } from "@playwright/test";
import { AgreementsDialog } from "../POM/agreements.dialog";
import { HomePage } from "../POM/home.page";
import { HomePageLocators } from "../locators/homePage.locators";
import { AgreementsDialogLocators } from "../locators/agreementsDialog.locators";
import { HeaderBlock } from "../POM/header.block";
import { HeaderBlockLocators } from "../locators/headerBlock.locators";
import { BrowseNowPage } from "../POM/browseNow.page";
import { BrowseNowPageLocators } from "../locators/browseNowPage.locators";
import { WallpaperPage } from "../POM/wallpaper.page";
import { WallpaperPageLocators } from "../locators/wallpaperPage.locators";

type PageFixtures = {
  agreementsDialog: AgreementsDialog;
  homePage: HomePage;
  browseNowPage: BrowseNowPage;
  headerBlock: HeaderBlock;
  wallpaperPage: WallpaperPage;
};

export const test = base.extend<PageFixtures>({

  agreementsDialog: async ({ page }, use) => {
    const locators = new AgreementsDialogLocators(page);
    await use(new AgreementsDialog(page, locators));
  },

  homePage: async ({ page }, use) => {
    const locators = new HomePageLocators(page);
    await use(new HomePage(page, locators));
  },

  browseNowPage: async ({ page }, use) => {
    const locators = new BrowseNowPageLocators(page);
    await use(new BrowseNowPage(page, locators));
  },

  headerBlock: async ({ page }, use) => {
    const locators = new HeaderBlockLocators(page);
    await use(new HeaderBlock(page, locators));
  },

  wallpaperPage: async ({ page }, use) => {
    const locators = new WallpaperPageLocators(page);
    await use(new WallpaperPage(page, locators));
  },
});

export { expect } from "@playwright/test";
