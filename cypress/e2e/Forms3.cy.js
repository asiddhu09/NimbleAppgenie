import {
  formBottom,
  headerform,
  lets_talkForm,
  submitformBottom,
  submitLetsClick,
  submtHeaderForm,
} from "../support/formHelpers";

//-------------------------------------HOME PAGE-------------------------//
//Lets Talk form

describe("Main page", () => {
  it("should fill and submit form on main page", () => {
    cy.visit("https://www.nimbleappgenie.com/"); //URL
    cy.contains("Let’s Talk").click();
    lets_talkForm(); //--------------------------- Fill the form fields up to the captcha
    cy.pause(); //-------------------------------- Pause to solve captcha manually
    submitLetsClick(); // ------------------------ Submit the form
  });
});

//Bottom Form

describe("Main page bottom form", () => {
  it("Bottom form", () => {
    cy.visit("https://www.nimbleappgenie.com/"); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});

//Header form

describe("Main Header form", () => {
  it("Header form", () => {
    cy.visit("https://www.nimbleappgenie.com/request-a-quote"); //URL
    headerform(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submtHeaderForm(); //--------------------------Submit the form----//
  });
});

//-------------------------------ABOUT US PAGE-------------------------//
describe("About form", () => {
  it("Aboutus page form", () => {
    cy.visit("https://www.nimbleappgenie.com/about-us"); //URL
    cy.contains("Apply Now").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("About bottom form", () => {
  it("Bottom form", () => {
    cy.visit("https://www.nimbleappgenie.com/about-us"); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});

//-------------------------------OUR Process PAGE-------------------------//

describe("Our Process bottom form", () => {
  it("Bottom form", () => {
    cy.visit("https://www.nimbleappgenie.com/our-process"); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});

describe("Our process(Start your project today) form", () => {
  it("Our process page form", () => {
    cy.visit("https://www.nimbleappgenie.com/our-process"); //URL
    cy.contains("Start Your Project Today").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

//------------------------------BECOME PARTNER---------------//
describe("Become partner bottom form", () => {
  it("Bottom form", () => {
    cy.visit("https://www.nimbleappgenie.com/become-partner"); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});

describe("Become Partner form", () => {
  it("Become Partner page form", () => {
    cy.visit("https://www.nimbleappgenie.com/become-partner"); //URL
    cy.contains("Become Partner").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

//-------------------------PORTFOLIO-------------------//

describe("Portfolio bottom form", () => {
  it("Bottom form", () => {
    cy.visit("https://www.nimbleappgenie.com/portfolio"); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});

//---------------------MOBILE APP DEVELOPMENT------------//
describe("Mobile app (Get a Quote) form", () => {
  it("Mobile app dev page form", () => {
    cy.visit("https://www.nimbleappgenie.com/services/mobile-app-development"); //URL
    cy.contains("Get A Quote").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

//Start Your Project Now
describe("Mobile app (Start Your Project Now) form", () => {
  it("Mobile app dev page form", () => {
    cy.visit("https://www.nimbleappgenie.com/services/mobile-app-development"); //URL
    cy.contains("Start Your Project Now").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

//Get Your Free Consultation
describe("Mobile app (Get Your Free Consultation)form", () => {
  it("Mobile app dev page form", () => {
    cy.visit("https://www.nimbleappgenie.com/services/mobile-app-development"); //URL
    cy.contains("Get Your Free Consultation").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("Mobile app bottom form", () => {
  it("Bottom form", () => {
    cy.visit("https://www.nimbleappgenie.com/services/mobile-app-development"); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});

//--------------------------------------------IOS APP DEV-------------//
describe("IOS app (Contact us) form", () => {
  it("IOS app dev page form", () => {
    cy.visit(
      "https://www.nimbleappgenie.com/services/mobile-app-development/ios"
    ); //URL
    cy.contains("Contact us").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

//-----------------FLUTTER APP DEV------------------------//
describe("Flutter (Get A Quote)form", () => {
  it("Flutter app dev page form", () => {
    cy.visit("https://www.nimbleappgenie.com/services/flutter-app-development"); //URL
    cy.contains("Get A Quote").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("Flutter (Get Started)form", () => {
  it("Flutter app dev page form", () => {
    cy.visit("https://www.nimbleappgenie.com/services/flutter-app-development"); //URL
    cy.contains("Get Started").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("Flutter bottom form", () => {
  it("Bottom form", () => {
    cy.visit("https://www.nimbleappgenie.com/services/flutter-app-development"); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});

//---------------------------HYBRID APP ------------------//
describe("Hybrid app (Get A Quote)form", () => {
  it("Hybrid page form", () => {
    cy.visit(
      "https://www.nimbleappgenie.com/services/mobile-app-development/hybrid"
    ); //URL
    cy.contains("Get A Quote").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("Hybrid app (Contact us)form", () => {
  it("Hybrid page form", () => {
    cy.visit(
      "https://www.nimbleappgenie.com/services/mobile-app-development/hybrid"
    ); //URL
    cy.contains("Contact us").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("Hybrid app (Hire Developer)form", () => {
  it("page form", () => {
    cy.visit(
      "https://www.nimbleappgenie.com/services/mobile-app-development/hybrid"
    ); //URL
    cy.contains("Hire Developer").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("Hybrid (Get Started Now)form", () => {
  it("IOS app dev page form", () => {
    cy.visit(
      "https://www.nimbleappgenie.com/services/mobile-app-development/hybrid"
    ); //URL
    cy.contains("Get Started Now").click();
    lets_talkForm(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitLetsClick(); //--------------------------Submit the form----//
  });
});

describe("Hybrid app bottom form", () => {
  it("Bottom form", () => {
    cy.visit(
      "https://www.nimbleappgenie.com/services/mobile-app-development/hybrid"
    ); //URL
    formBottom(); //------------------------------Fill the form----//
    cy.pause(); //-------------------------------Pause the form for filling the captcha manually----//
    submitformBottom(); //-----------------------Submit the form----//
  });
});
