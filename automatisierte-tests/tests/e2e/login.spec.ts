import { test, expect} from '@playwright/test';

 //1
test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Check if we are on the correct page after login
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// 2:
test ('Login with invalid credentials', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');
 await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce123');
await page.getByRole('button', { name: 'Login' }).click();

//check for error message
const errorMessage = page.locator('.error-message-container');
await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

});


// 3:
test ('Login with missing password', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');
 await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
await page.getByRole('textbox', { name: 'Password' }).fill('');
await page.getByRole('button', { name: 'Login' }).click();

//check for the error message
const requiredfield = page.locator('.error-message-container');
await expect(requiredfield).toHaveText('Epic sadface: Password is required');


 });

