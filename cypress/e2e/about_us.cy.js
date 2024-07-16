export function about_us() {
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
}
