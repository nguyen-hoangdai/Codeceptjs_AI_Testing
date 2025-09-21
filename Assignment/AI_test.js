Feature("AI - Facebook Testing");

// Basic Facebook test
// Scenario("AI test - Facebook basic", ({ I }) => {
//   I.amOnPage("https://www.facebook.com/");
//   I.see("Facebook"); // Verify page loaded
// });

// SELF-HEAL test
// Scenario("Github login", ({ I }) => {
//   I.amOnPage("https://github.com");
//   I.click("Sign in");
//   I.fillField("Username or email address", "davert");
//   I.fillField("Password", "123345");
//   I.click("Sign in");
//   I.see("Incorrect username or password");
// });

///1.AI Prompting - Facebook login test cases

// Scenario('User tries to login with invalid email', async ({ I }) => {
//   await I.amOnPage('https://www.facebook.com/');
//   await I.fillField('email', 'invalid_email');
//   await I.fillField('pass', 'testpassword');
//   await I.click('[name="login"]');
//   await I.wait(3);
//   // After invalid login, should still see login form
//   await I.seeElement('#email');
// });

// Scenario('User tries to login with invalid password', async ({ I }) => {
//   await I.amOnPage('https://www.facebook.com/');
//   await I.fillField('email', 'test@example.com');
//   await I.fillField('pass', 'wrongpassword');
//   await I.click('[name="login"]');
//   await I.wait(3);
//   // After invalid login, should still see login form
//   await I.seeElement('#email');
// });

// Scenario('User leaves both email and password fields blank', async ({ I }) => {
//   await I.amOnPage('https://www.facebook.com/');
//   await I.click('[name="login"]');
//   await I.wait(2);
//   // Should still be on login page
//   await I.seeElement('#email');
// });


// Scenario('Facebook - Verify homepage loads', async ({ I }) => {
//   await I.amOnPage('https://www.facebook.com/');
//   await I.see('Facebook');
//   await I.seeElement('#email');
//   await I.seeElement('[name="pass"]');
//   await I.seeElement('[name="login"]');
// });

// Scenario('Facebook - Login with invalid email', async ({ I }) => {
//   await I.amOnPage('https://www.facebook.com/');
//   await I.fillField('email', 'invalid_email_test');
//   await I.fillField('pass', 'testpassword123');
//   await I.click('[name="login"]');
//   await I.wait(3);
//   // After failed login, should still see email field
//   await I.seeElement('#email');
// });

// Scenario('Facebook - Login with empty fields', async ({ I }) => {
//   await I.amOnPage('https://www.facebook.com/');
//   await I.click('[name="login"]');
//   await I.wait(2);
//   // Should still be on login page with validation
//   await I.seeElement('#email');
// });

// Scenario('Facebook - Check sign up link', async ({ I }) => {
//   await I.amOnPage('https://www.facebook.com/');
//   await I.see('Create new account');
//   await I.click('Create new account');
//   await I.wait(3);
//   await I.see('Sign Up');
// });

//2.GENERATE PAGE OBJECTS
// Scenario('Generate Page Object', async ({ I }) => {
//   await I.amOnPage('http://localhost:8080/date_checker.html');
//   pause()
// })


//3. SELF-HEAL FALLING TEST
Scenario('Self-Heal - Date Checker', async ({ I }) => {
  await I.amOnPage('http://localhost:8080/date_checker.html');
  await I.fillField('day', '31');
  await I.fillField('month', '02');
  await I.fillField('year', '2020');
  await I.click('Check Date');
  await I.wait(3);
  // After invalid date, should still see date fields
  await I.seeElement('#day');
  await I.seeElement('#month');
  await I.seeElement('#year');
});
