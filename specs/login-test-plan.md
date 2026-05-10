# Login Page Test Plan - Automation Practice

## Application Overview

This test plan covers comprehensive testing of the login page for the Automation Practice e-commerce website (https://automationpractice.techwithjatin.com/login). The page includes two primary sections: account creation and existing user login. Tests will cover happy path scenarios, input validation, error handling, edge cases, and user navigation flows.

## Test Scenarios

### 1. Login Form - Existing User

**Seed:** `seed.spec.ts`

#### 1.1. Successfully login with valid credentials

**File:** `tests/login/valid-login.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
    - expect: Both 'Create an account' and 'Already registered?' sections are visible
  2. Enter valid email address in the 'Already registered?' email field
    - expect: Email is entered without errors
  3. Enter valid password in the password field
    - expect: Password is entered and masked with dots/asterisks
  4. Click the 'Sign in' button
    - expect: User is redirected to the account/dashboard page
    - expect: User session is created
    - expect: Personalized greeting or account information is displayed

#### 1.2. Login with valid email but incorrect password

**File:** `tests/login/invalid-password.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Enter a valid registered email address in the email field
    - expect: Email is entered correctly
  3. Enter an incorrect password in the password field
    - expect: Password field accepts the input
  4. Click the 'Sign in' button
    - expect: User remains on the login page
    - expect: An error message is displayed indicating invalid credentials
    - expect: No session is created

#### 1.3. Login with empty email field

**File:** `tests/login/empty-email.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Leave the email field empty in 'Already registered?' section
    - expect: Email field remains empty
  3. Enter a password in the password field
    - expect: Password is entered correctly
  4. Click the 'Sign in' button
    - expect: Form validation error is displayed
    - expect: User is not logged in
    - expect: Login attempt is prevented

#### 1.4. Login with empty password field

**File:** `tests/login/empty-password.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Enter a valid email address in the email field
    - expect: Email is entered correctly
  3. Leave the password field empty
    - expect: Password field remains empty
  4. Click the 'Sign in' button
    - expect: Form validation error is displayed
    - expect: User is not logged in
    - expect: Login attempt is prevented

#### 1.5. Login with both email and password fields empty

**File:** `tests/login/both-fields-empty.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
    - expect: Both email and password fields are empty
  2. Click the 'Sign in' button without entering any information
    - expect: Form validation errors are displayed for empty fields
    - expect: Login is not attempted
    - expect: User remains on login page

#### 1.6. Login with invalid email format

**File:** `tests/login/invalid-email-format.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Enter an invalid email format in the email field (e.g., 'notanemail' or 'test@')
    - expect: Invalid email is entered
  3. Enter a password
    - expect: Password is entered
  4. Click the 'Sign in' button
    - expect: Email format validation error is displayed
    - expect: Login is not attempted
    - expect: User remains on login page

#### 1.7. Forgot password link functionality

**File:** `tests/login/forgot-password-link.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Look for and verify the 'Forgot your password?' link is visible
    - expect: Link is clearly visible and accessible
  3. Click the 'Forgot your password?' link
    - expect: User is redirected to password recovery page
    - expect: URL changes to password recovery endpoint

#### 1.8. Password field masking

**File:** `tests/login/password-masking.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Type a password in the password field
    - expect: Password characters are masked and not visible as plain text
    - expect: Characters appear as dots, asterisks, or other masking indicators

### 2. Account Creation Form

**Seed:** `seed.spec.ts`

#### 2.1. Create account with valid email address

**File:** `tests/account-creation/valid-email.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
    - expect: 'Create an account' section is visible
  2. Enter a new valid email address in the 'Create an account' email field
    - expect: Email is entered without errors
  3. Click the 'Create an account' button
    - expect: User is redirected to account creation/registration form page
    - expect: Email is pre-filled in the registration form

#### 2.2. Create account with empty email field

**File:** `tests/account-creation/empty-email.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Leave the 'Create an account' email field empty
    - expect: Email field remains empty
  3. Click the 'Create an account' button
    - expect: Form validation error is displayed
    - expect: User is not redirected

#### 2.3. Create account with invalid email format

**File:** `tests/account-creation/invalid-format.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Enter an invalid email format (e.g., 'notanemail' or 'test@')
    - expect: Invalid email is entered
  3. Click the 'Create an account' button
    - expect: Email format validation error is displayed
    - expect: User is not redirected

### 3. UI/UX and Navigation

**Seed:** `seed.spec.ts`

#### 3.1. Verify page layout and section visibility

**File:** `tests/ui-ux/page-layout.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Page loads with proper layout
    - expect: Header with navigation is visible
    - expect: Main content area displays both form sections
    - expect: Footer is visible
  2. Verify both 'Create an account' and 'Already registered?' sections are visible
    - expect: Two columns or sections are clearly distinguishable
    - expect: Each section has appropriate heading and labels

#### 3.2. Verify form field labels

**File:** `tests/ui-ux/form-labels.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Verify all form fields have proper labels: 'Email address' and 'Password'
    - expect: Labels are visible and clearly associated with input fields
    - expect: Labels are descriptive

#### 3.3. Navigation header links

**File:** `tests/ui-ux/navigation-links.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Verify header navigation links are present: 'Sign in', 'Contact us'
    - expect: Navigation links are visible and functional
  3. Click on 'Sign in' link in header
    - expect: Redirects to my-account page or stays on login page depending on login state

#### 3.4. Breadcrumb navigation

**File:** `tests/ui-ux/breadcrumb.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Locate breadcrumb navigation element
    - expect: Breadcrumb is visible showing path: Home > Authentication
  3. Click on 'Home' in breadcrumb
    - expect: User is redirected to homepage

### 4. Security and Accessibility

**Seed:** `seed.spec.ts`

#### 4.1. HTTPS connection

**File:** `tests/security/https-check.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Page loads over HTTPS
    - expect: URL shows 'https://' protocol
    - expect: No security warnings are displayed

#### 4.2. Form accessibility - keyboard navigation

**File:** `tests/accessibility/keyboard-navigation.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login
    - expect: Login page loads successfully
  2. Use Tab key to navigate through form fields
    - expect: Focus indicator clearly shows which field is active
    - expect: Tab order is logical: email field → password field → submit button
  3. Press Enter on submit button when focused
    - expect: Form is submitted successfully

#### 4.3. Screen reader support

**File:** `tests/accessibility/screen-reader.spec.ts`

**Steps:**
  1. Navigate to https://automationpractice.techwithjatin.com/login with screen reader enabled
    - expect: Page heading 'Authentication' is announced
    - expect: Section heading 'Already registered?' is announced
  2. Use screen reader to navigate form fields
    - expect: Email input is labeled as 'Email address'
    - expect: Password input is labeled as 'Password'
