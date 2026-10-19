import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('não deve possuir violações críticas de acessibilidade', async ({ page }) => {

  await page.goto('https://playwrightlab.github.io');

  const results = await new AxeBuilder({
    page
  }).analyze();

  expect(results.violations).toEqual([]);
});