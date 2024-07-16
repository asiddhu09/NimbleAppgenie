describe("Header form", () => {
  it("form with captcha", () => {
    cy.visit("https://www.nimbleappgenie.com/request-a-quote");
    cy.get("#txtName01").type("test name");
    cy.get("#txtEmail01").type("test@test.com");
    cy.get("#exampleFormControlTextarea21").type("abc xyz");

    //now have to solve the captcha manually, so the test will pause here
    cy.pause();
    cy.get("#send_message0").click();
  });
});
