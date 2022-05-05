it("Checking if the main page is displayed correctly", () => {
  cy.visit("http://qamid.tmweb.ru");
  cy.contains("Фильм");
});
