// Mock process.env in Cypress setup
window.process = {
  env: {
    NODE_ENV: "test",
  },
};

// Describe the test suite
describe("csslocatorstest", () => {
  // Define the test case
  it("test1", () => {
    // Visit the target website
    cy.visit("http://www.automationpractice.pl/index.php");

    // Type "Shoes" in the search input field
    cy.get("#search_query_top").type("Shoes");

    // Click the search button
    cy.get("[name='submit_search']").click();

    // Assert that the results page contains the text "Shoes"
    cy.get(".lighter").should("contain", "Shoes");
  });
});
