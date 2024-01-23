import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: 'e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'http://127.0.0.1:3000'
    },
    projects: [
        {
            name: 'chronium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    webServer: {
        command: 'npm run start',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
    }
});