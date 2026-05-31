import { Locator, expect, Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { logger } from '../utils/logger';

export async function printWallpaperTypes(wallpaperBlocks: Locator, premiumWallpaperLocator: Locator): Promise<void> {
  for (let i = 0; i < await wallpaperBlocks.count(); i++) {
    const block = wallpaperBlocks.nth(i);
    const isPremium = await block.locator(premiumWallpaperLocator).count() > 0;
    const type = isPremium ? 'Premium' : 'Free';
    logger.actionInfo(`Wallpaper ${i + 1} type: ${type}`);
    await block.waitFor({ state: 'visible' });
    await block.hover();
  }
}

export async function getFirstFreeWallpaperElement(wallpaperBlocks: Locator, premiumWallpaperLocator: Locator): Promise<Locator> {
  for (let i = 0; i < await wallpaperBlocks.count(); i++) {
    const block = wallpaperBlocks.nth(i);
    const isPremium = await block.locator(premiumWallpaperLocator).count() > 0;
    if (!isPremium) {
      return block;
    }
  }
  throw new Error('No free wallpaper found');
}

export async function downloadAndGetFileName(downloadButton: Locator): Promise<string> {
  const [download] = await Promise.all([
    downloadButton.page().waitForEvent('download'),
    downloadButton.click(),
  ]);

  const fileName = download.suggestedFilename();
  const timestamp = Date.now();
  const uniqueFileName = `${timestamp}_${fileName}`;
  await download.saveAs('./downloads/' + uniqueFileName);
  return uniqueFileName;
}

export async function verifyWallpaperDownloaded(fileName: string) {
  const savePath = path.join('./downloads', fileName);
  logger.actionInfo(`Verifying download: ${fileName}`);
  expect(fs.existsSync(savePath)).toBe(true);
  expect(fs.statSync(savePath).size).toBeGreaterThan(0);
}
