import { test, expect } from '@playwright/test';

test('titulo de la app', async ({page}) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Gitfhub' })).toBeVisible();
});