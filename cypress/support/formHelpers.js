//FORM 1
export function formBottom() {
  cy.get("form")
    .should("be.visible")
    .first()
    .within(() => {
      cy.get('[name="txtName"]').type("test name");

      cy.get('[name="txtEmail"]').type("test@mailinator.com");
      cy.get('[name="txtPhone"]')
        .should("exist")
        .should("be.visible")
        .type("0123456789");
      cy.get('[name="txtMsg"]')
        .should("exist")
        .should("be.visible")
        .type("abc");
      // Add other form fields as needed
    });
}
// Submit the form which at bottom
export function submitformBottom() {
  cy.get("#send_message0").click();
}

//FORM 2
export function headerform() {
  cy.get("#txtName01").type("test name");
  cy.get("#txtEmail01").type("test@test.com");
  cy.get("#exampleFormControlTextarea21").type("abc xyz");

  //now have to solve the captcha manually, so the test will pause here
  cy.pause();
}

//Submit the header form
export function submtHeaderForm() {
  cy.get("#send_message0").click();
}

//FORM 3
export function lets_talkForm() {
  cy.get("#txtName0").type("test name");
  cy.get("#txtEmail0").type("test@test.com");

  // cy.pause();

  // cy.get("#send_message_pop").click();
  // cy.get("#exampleFormControlTextarea2").type("abcdef"); //Commented this line because and element is disturbing this field by overlaping it.

  //now have to solve the captcha manually, so the test will pause here
  // cy.pause();
}

//Submit let talk form
export function submitLetsClick() {
  cy.get("#send_message_pop").click();
}
