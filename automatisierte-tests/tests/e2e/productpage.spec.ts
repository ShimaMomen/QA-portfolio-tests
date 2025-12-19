import { test, expect } from '@playwright/test';

test('Product page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByRole('textbox', { name: 'Username'}).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  
// Verify that we are on the products page
  const titleLocator = page.locator('[data-test="title"]');
  await expect(titleLocator).toHaveText('Products');
  
  // Verify that there are 6 products displayed on the page
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);

// Verify that each product has an "Add to cart" button
  const AddToCartButtons = page.locator('.inventory_item').getByRole('button', { name: 'Add to cart' });

  for (let i = 0; i < 6;  i++) {
    const button = AddToCartButtons.nth(i);
    await expect(button).toHaveText('Add to cart');  
  }

  

 });