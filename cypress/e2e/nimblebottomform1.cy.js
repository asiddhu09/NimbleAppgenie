import { about_us } from "./about_us.cy";

describe("Form Submission with Captcha", () => {
  it("should allow manual captcha solving and resume test", () => {
    cy.visit("https://www.nimbleappgenie.com", { failOnStatusCode: false });

    // cy.contains('Let’s Talk').click();

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

    // cy.pause();

    // Submit the form
    // cy.get("#send_message0").click();
  });
});

//Header form

describe("Header form", () => {
  it("form with captcha", () => {
    cy.visit("https://www.nimbleappgenie.com/request-a-quote");
    cy.get("#txtName01").type("test name");
    cy.get("#txtEmail01").type("test@test.com");
    cy.get("#exampleFormControlTextarea21").type("abc xyz");

    //now have to solve the captcha manually, so the test will pause here
    // cy.pause();
    // cy.get("#send_message0").click();
  });
});

//Lets, Talk form
describe("Header form", () => {
  it("form with captcha", () => {
    cy.visit("https://www.nimbleappgenie.com/");
    cy.contains("Let’s Talk").click();
    cy.get("#txtName0").type("test name");
    cy.get("#txtEmail0").type("test@test.com");

    cy.pause();

    // cy.get("#send_message_pop").click();
    // cy.get("#exampleFormControlTextarea2").type("abcdef");

    //now have to solve the captcha manually, so the test will pause here
    // cy.pause();
    // cy.get("#send_message0").click();
  });
});

// About us page form

describe("Form Submission with Captcha", () => {
  it("should allow manual captcha solving and resume test", () => {
    cy.visit("https://www.nimbleappgenie.com/about-us", {
      failOnStatusCode: false,
    });

    // cy.contains('Let’s Talk').click();

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

    // cy.pause();

    // Submit the form
    // cy.get("#send_message0").click();
  });
});
