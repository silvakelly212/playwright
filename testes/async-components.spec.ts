import { test, expect } from '@playwright/test';

test('não deve permitir cadastro sem preencher campos obrigatórios', async ({ page }) => {

  await page.goto('https://playwrightlab.github.io');

  await page.getByRole('button', {
    name: /Register/i
  }).click();

  const invalidFields = page.locator(':invalid');

  await expect(invalidFields.first()).toBeVisible();
});