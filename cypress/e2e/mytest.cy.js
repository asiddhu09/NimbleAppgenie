// const cypress = require["cypress"];

describe("myfirsttest", () => {
  it("Positive Title", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.title().should("eq", "OrangeHRM");
  });

  it("Negative Title", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.title().should("eq", "Orange");
  });
});
