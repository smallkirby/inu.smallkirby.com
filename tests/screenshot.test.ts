import { expect, test } from '@playwright/test';

const maxDiffPixels = 20000;

test('index', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot('index.png', {
    maxDiffPixels,
  });
});

test('about', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  await expect(page).toHaveScreenshot('about.png', {
    maxDiffPixels,
  });
});

test('activity', async ({ page }) => {
  await page.goto('http://localhost:3000/activity');
  await expect(page).toHaveScreenshot('activity.png', {
    maxDiffPixels,
  });
});
