import { expect, test } from '@playwright/test';

test('index', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot('index.png', {
    maxDiffPixels: 1000,
  });
});

test('about', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  await expect(page).toHaveScreenshot('about.png', {
    maxDiffPixels: 1000,
  });
});

test('activity', async ({ page }) => {
  await page.goto('http://localhost:3000/activity');
  await expect(page).toHaveScreenshot('activity.png', {
    maxDiffPixels: 1000,
  });
});
