import { test, expect } from '@playwright/test';

test('Inventory page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  
// Verify that we are on the inventory page
  const titleLocator = page.locator('[data-test="title"]');
  await expect(titleLocator).toHaveText('Products');
  
  // Verify that there are 6 products displayed on this page
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);

// Verify that each product has an "Add to cart" button
  const addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
  await expect(addToCartButtons).toHaveCount(6);


  

 });