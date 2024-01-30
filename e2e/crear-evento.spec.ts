import { test, expect } from '@playwright/test';

test('Crear evento "Navidad 2024" entre "Ale", "Dani" y "Negrita", organizado por "Ale"', async({page}) => {

    await page.goto('/');
    await page.getByTestId('input-nombre-evento').fill('Navidad 2024');
    await page.getByTestId('input-nombre-organizador').fill('Ale');
    await page.getByTestId('input-email-organizador').fill('ale@gmail.com');
    await page.getByRole('button', { name: 'Crear' }).click();
    await expect(page.getByTestId('evento-creado')).toContainText('Evento creado');
});