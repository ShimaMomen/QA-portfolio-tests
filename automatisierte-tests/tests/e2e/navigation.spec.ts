
import { test, expect } from '@playwright/test';


test ('Navigate to dashboard items', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL(/dashboard/);
await expect( page.getByRole('heading', { name: 'Dashboard', level: 6 })).toBeVisible();
await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Dashboard' })).toHaveClass(/active/);

//Verify that expected navigation items exist using array:
const navItems: string[]= ['Admin', 'PIM', 'Leave', 'Time',  'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'claim', 'Buzz'];
for (let i = 0; i<navItems.length; i++) {
  await expect(page.getByRole('link', { name: navItems[i] })).toBeVisible();
}






});
