import { test, expect } from '@playwright/test';

test('deve exibir layout responsivo em mobile', async ({ page }) => {

  await page.goto('/');

  await expect(
    page.getByText('Master Playwright Test Automation')
  ).toBeVisible();
});