Feature("AI");
//Tính năng
// Normal Promting
// Scenario("AI test", ({ I }) => {
//   // I.amOnPage("https://www.facebook.com/login.php/");
//   // I.amOnPage("https://getbootstrap.com/docs/5.1/examples/checkout/");
//   I.amOnPage("https://en.wikipedia.org/wiki/History_of_music"); //For PageObject
//   pause();
// });

// Self-heal
Scenario("Github login", ({ I }) => {
  I.amOnPage("https://github.com");
  I.click("Sign in");
  I.fillField("Username", "davert");
  I.fillField("Password", "123345");
  I.click("Sign in"); //Wrong
  I.see("Incorrect username or password");
});
