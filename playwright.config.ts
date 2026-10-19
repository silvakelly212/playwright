import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  use: {
    baseURL: 'https://playwrightlab.github.io',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 7']
      }
    }

  ],
  
  reporter: [
  ['html'],
  ['junit', { outputFile: 'results.xml' }]
  ]

});
