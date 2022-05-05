const login = require("../fixtures/login_page.json");
const hall = require("../fixtures/open.json");
const seats = require("../fixtures/seats.json");

describe("booking tickets, when you turn on the hall from the admin", () => {
  it("booking tickets", () => {
    cy.visit("/");
    cy.login(login.validEmail, login.validPassword);
    cy.get(hall.Hercules).click();
    cy.get(hall.OpenTicket).click();
    cy.visit("http://qamid.tmweb.ru/client/index.php");
    cy.get(hall.Time).click();
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get(hall.boocking).click();
  });
});
