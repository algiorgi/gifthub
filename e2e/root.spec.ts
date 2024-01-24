import { test, expect } from '@playwright/test';

test('titulo de bienvenida', async ({page}) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible();
});