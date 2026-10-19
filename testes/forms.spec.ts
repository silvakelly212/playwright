import { test, expect } from '@playwright/test';
//FRM-02 Tentar submeter sem preencher campos obrigatórios
test('deve preencher formulário com sucesso', async ({ page }) => {

  await page.goto('https://playwrightlab.github.io');

  await page.getByLabel(/Full Name/i).fill('João Silva');
  await page.getByLabel(/Email Address/i).fill('joao@email.com');
  await page.getByLabel(/Password/i).fill('Senha@123');

  await page.getByLabel(/Phone Number/i).fill('11999999999');

  await page.getByLabel(/Male/i).check();

  await page.getByLabel(/JavaScript/i).check();

  await page.getByRole('checkbox', {
    name: /Terms/i
  }).check();

  await page.getByRole('button', {
    name: /Register/i
  }).click();
});