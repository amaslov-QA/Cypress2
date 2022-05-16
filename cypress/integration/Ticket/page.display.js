it("Checking if the main page is displayed correctly", () => {
  cy.visit("http://qamid.tmweb.ru");
  cy.contains("Фильм");
});
it("Should show correct number of days", () => {
  cy.visit("qamid.tmweb.ru");
  cy.get(".page-nav__day").should("have.length", 7);
});
