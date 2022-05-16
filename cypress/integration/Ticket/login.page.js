const login = require("../fixtures/login_page.json");
const admin = require("../fixtures/admin_enter_page.json");

describe("Checking login input", () => {
  it("Entering the correct email and password", () => {
    cy.visit("/");
    cy.login(login.validEmail, login.validPassword);
    cy.contains("Управление залами");
  });
  it("Input without mail", () => {
    cy.visit("/");
    cy.login("   ", login.validPassword);
    cy.get(admin.email)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  it("entering wrong password and email", () => {
    cy.visit("/");
    cy.login(login.invalidEmail, login.invalidPassword);
    cy.contains("Ошибка авторизации!");
  });
});
