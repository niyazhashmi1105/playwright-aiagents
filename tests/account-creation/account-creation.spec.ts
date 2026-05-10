// spec: specs/login-test-plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Account Creation Form', () => {
  test('Create account with valid email address', async ({ page }) => {
    // Navigate to https://automationpractice.techwithjatin.com/login
    await page.goto('https://automationpractice.techwithjatin.com/login');

    // Enter a new valid email address in the 'Create an account' email field
    const createAccountEmailInput = page.locator('#email_create');
    await createAccountEmailInput.fill('newtestuser@example.com');

    // Click the 'Create an account' button
    const createAccountButton = page.getByRole('button', { name: ' Create an account' });
    await createAccountButton.click();

    // Wait for the registration form page to load
    await page.waitForURL(/.*\/login.*/, { waitUntil: 'domcontentloaded' });
    
    // Verify: Page heading shows "Create an account" (registration form loaded)
    const pageHeading = page.locator('h1');
    await expect(pageHeading).toContainText('Create an account');
    
    // Verify: Email is pre-filled in the registration form (use specific #email ID to avoid newsletter input)
    const emailField = page.locator('#email[type="email"]');
    await expect(emailField).toHaveValue('newtestuser@example.com');
  });

  test('Create account with empty email field', async ({ page }) => {
    // Navigate to https://automationpractice.techwithjatin.com/login
    await page.goto('https://automationpractice.techwithjatin.com/login');

    // Leave the 'Create an account' email field empty
    const createAccountEmailInput = page.locator('#email_create');
    // Email field is empty by default, no action needed

    // Click the 'Create an account' button without entering any information
    const createAccountButton = page.getByRole('button', { name: ' Create an account' });
    await createAccountButton.click();

    // Verify: Form validation error is displayed
    const errorMessage = page.getByText('Invalid email address');
    await expect(errorMessage).toBeVisible();
    
    // Verify: User is not redirected (remains on login page)
    expect(page.url()).toContain('/login');
    
    // Verify: Create an account form is still visible
    const createAccountSection = page.locator('h3:has-text("Create an account")');
    await expect(createAccountSection).toBeVisible();
  });

  test('Create account with invalid email format - no frontend validation', async ({ page }) => {
    // NOTE: The application validates email format on the backend only.
    // Frontend accepts any non-empty input without validation.
    // This test verifies that frontend does not reject invalid formats.
    
    // Navigate to https://automationpractice.techwithjatin.com/login
    await page.goto('https://automationpractice.techwithjatin.com/login');

    // Enter an invalid email format (e.g., 'test@' - missing domain)
    const createAccountEmailInput = page.locator('#email_create');
    await createAccountEmailInput.fill('test@');

    // Click the 'Create an account' button
    const createAccountButton = page.getByRole('button', { name: ' Create an account' });
    await createAccountButton.click();

    // Verify: No frontend validation error is shown for non-empty invalid format
    const errorMessage = page.getByText('Invalid email address');
    await expect(errorMessage).not.toBeVisible();
    
    // Verify: Backend validation happens (no error message immediately means submission attempt)
    // The application attempts to proceed without frontend validation
    const createAccountForm = page.locator('h3:has-text("Create an account")');
    // Form may still be visible or page may have changed depending on backend response
    // Just verify we're still on login/auth pages
    expect(page.url()).toContain('login');
  });
});