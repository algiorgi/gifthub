import { test, expect } from '@playwright/test';

test('Crear evento "Navidad 2024" entre "Ale", "Dani" y "Negrita", organizado por "Ale" con un monto máximo de "$25000.00"', async({page}) => {

    const participantes = [{nombre: "Dani", email: "dani@gmail.com"}, {nombre: "Negrita", email: "negrita@gmail.com"}];
    await page.goto('/');
    await page.getByTestId('input-nombre-evento').fill('Navidad 2024');
    await page.getByTestId('input-nombre-organizador').fill('Ale');
    await page.getByTestId('input-email-organizador').fill('ale@gmail.com');

    for (const participante of participantes) {
        await page.getByTestId('input-nombre-participante').fill(participante.nombre);
        await page.getByTestId('input-email-participante').fill(participante.email);
        await page.getByRole('button', { name: 'Agregar' }).click();
    }

    await page.getByTestId('input-monto-maximo').fill('25000');

    await page.getByRole('button', { name: 'Crear' }).click();
    await expect(page.getByTestId('evento-creado')).toContainText('Evento creado');
});