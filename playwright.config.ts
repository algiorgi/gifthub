import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: 'e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'http://127.0.0.1:3000',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chronium',
            use: { ...devices['Desktop Chrome'] },
        },
    ]
}

const webServerCommand = process.env.CI ? 'npm run start' : 'npm run dev'
const reuseExistingServer = !process.env.CI;
const webServer = {
    command: webServerCommand,
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: reuseExistingServer
}

config.webServer = webServer;

export default config;