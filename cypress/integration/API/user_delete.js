it("user delete testing", () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user",
    body: {
      id: 1,
      username: "Ivan",
      firstName: "Ivanov",
      lastName: "Ivanovich",
      email: "Ivanov25@mail.com",
      password: "1ivan12",
      phone: "9196355566",
      userStatus: 1,
    },
  });
  cy.request({
    method: "DELETE",
    url: "https://petstore.swagger.io/v2/user/Ivan",
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });
});
