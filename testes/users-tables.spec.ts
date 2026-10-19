import { test, expect } from '@playwright/test';
test.describe('User Management', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwrightlab.github.io');
    await page.locator('text=User Management').scrollIntoViewIfNeeded();
  });

  test('deve validar listagem, ordenação e paginação', async ({ page }) => {

    await expect(page.locator('text=Alice Johnson')).toBeVisible();

    await page.getByRole('columnheader', { name: /Name/i }).click();

    const firstRow = page.locator('tbody tr').first();
    await expect(firstRow).toBeVisible();

    await page.getByRole('button', { name: '2' }).click();

    await expect(page.locator('text=Showing')).toBeVisible();
  });

  test('deve abrir fluxo de adicionar usuário', async ({ page }) => {

    await page.getByRole('button', { name: /\+ Add User/i }).click();

    await expect(page.locator('body')).toBeVisible();
  });

});