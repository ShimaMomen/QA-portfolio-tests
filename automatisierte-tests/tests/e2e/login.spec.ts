import { test, expect } from '@playwright/test';

// This file contains three end-to-end tests for the login functionality of the OrangeHRM demo site.

// 1:
test ('Login with valid credentials', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});

// 2:
test ('Login with invalid credentials', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin1');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

const errorMessage = page.getByRole('alert');
await expect(errorMessage).toHaveText('Invalid credentials'); 


    });


// 3:
test ('Login with missing password', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill(' ');
await page.getByRole('button', { name: 'Login' }).click();
const requiredfield = page.locator('.oxd-input-field-error-message');
await expect(requiredfield).toHaveText('Required');


   });