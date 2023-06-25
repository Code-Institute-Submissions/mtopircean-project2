# The Selector

The website was create as a support tool to help users on their last step in a decission making process.

It is a tool that pushes users to undestand how important certain elements are in their decission making process, how they can limit them to the essential and at the end, how they can filter their options in order to reach again, the essential.

It then uses a calculation methodology to manipulate their data in order to be able too make an informed recommandation

The idea originates in my own experience as a procuremenet professional and is something that I intend to use in order to support my decission making process.

## CONTENT
* [Scope](#scope)
* [User Experience](#user-experience)
* [Deployment](#deployment-and-local-development)
    * [How do Deploy](#how-to-deploy)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)
* [Technologies](#technologies)
    * [Programming Languages](#programming-languages)
    * [IDE](#ide)
    * [Other](#other)
* [Design](#design)
    * [Wireframes](#wireframes)
    * [Theme](#theme)
    * [Colour Selection](#colour-selection)
    * [Font and text style](#font-and-text-style)
    * [Imagery](#imagery)
    * [Features](#features)
    * [Accessibility](#accessibility)
    * [Display size optimization](#display-size-optimization)
* [Testing and Validation](#testing-and-validation)
    * [HTML](#html)
    * [CSS](#css)
    * [Accessibility Test](#accessibility-test)
    * [Lighthouse](#lighthouse)
    * [Spellcheck](#spellcheck)
    * [JavaScript](#javascript)
    * [Local functionality tests](#local-functionality-tests)
    * [Fixed bugs](#fixed-bugs)
* [Credits](#credits)
    * [Code Used](#code-used)
    * [Other](#other)
* [About Author](#about-author)
## Scope
The website was created to satisfy one main requirement/objective, which is to support a decission making process.
However, The Selector was developed in order to provide a wider area of flexibility for the user, from defining the characteristics they value, asigning them priorities, selecting between 2 and 3 options to offering them a wider range of possibility when scoring their items of interest.

Although a simple tool, my hope is for it to target an extremly wide audience with it`s usability and unlimited application area.

##  User Experience

#### First Time Visitor Target:
* Provide an easy to understand interface with clear instructions on what the application does and how to use.
* Offer a solution for a decission they need to make on a wide range of applications and domains, from home to professional use.
* Have the capability to store their data by printing the page and potentially use them at a later stage, or attaching them as supporting documentation on a report.
* Provide a fun way to either generate an informed and calculated decission or use a "coin flip" by using the generate random section.

####  Returning Visitor Target:
* Application does not represent a one time use, but a tool that can be integrated in your activity as a professional, or at home in each users personal life.
* For professionals it can represent a standardized process and format that can be included in their reporting process.

#### Frequent Visitors Target:
* Unlimited target audience and usability, as it clearly targets a need applicable in all areas from professionals to home use, on all demographics.
* Users are expected to integrate the application as a standard part of their decission making process due to simplicity, but still an informed way of determining recommandations.

## Deployment and Local Development
Deployment of the website was used with GitHub Pages support.
Deployed website can be visited at the [link](https://mtopircean.github.io/project2/)

#### How to Deploy:
To deploy using GitHub pages:

1. Login or Sign Up to GitHub.
2. Open the project repository.
3. Click on "Settings" on the navigation bar under the repository title.
4. Click on "Pages" in the left hand navigation panel.
5. Under "Source", choose which branch to deploy. This should be Main for newer repositories (older repositories may still use Master).
6. Choose which folder to deploy from, usually "/root".
7. Click "Save", then wait for it to be deployed. It can take some time for the page to be fully deployed.
8. Your URL will be displayed above "Source".

#### How to Fork
To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [mtopircean/project2](https://github.com/mtopircean/project2)
3. Click the Fork button in the top right corner.

#### How to Clone
To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [mtopircean/project2](https://github.com/mtopircean/project2)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.


## Technologies

#### Programming Languages:
1. HTML
2. CSS
3. Java Script


#### IDE:
1. GitHub: to deploy workspace, website and store database, but used to write also small pieces of code
2. CodeAnywhere: support to write code and deploy via git to GitHub.
3. GitPod: support to write majority of code and deploy via git to GitHub.

#### Other:
1. Canva: support with logo creation.
2. Font Awesome: support with icon for About, How to... and 404 redirect to Home link and icon.
3. Google Font: support with font style used for website text.
4. Balsamiq: support with wireframe creation.
7. Google DevTools: support with CSS styling, troubleshooting and responsive design development; support with testing function exection/js functionality.
8. Lighthouse: performance testing .
9. W3C Spell Checker: webpage spelling checks.
10. WAVE Web Accessibility Evaluation Tools: for accessibility evaluation.
11. CSS Validation Service: for CSS code evaluation and troubleshooting.
12. W3C Markup Validation Service: for HTML code evaluation and troubleshooting.
13. JSHint JavaScript Validator: to verify and improve Java Script code.
14. Coolors: to create palete of colors in README.
15. Amiresponsive: to create a snapshot of the page responsiveness on different screen variations

## Design
The general design idea was to: 
* Give a robotic, technology, calculator feeling to the user entering the page.
* Provide all information into one page with clear instructions, mission, easy to understand and use.
* General direction is reflected in the logo and style selected.
* Design focuses on flex technology and is created in a manner that allows easy resizing to different screen sizes.

#### Wireframes
In order to support development, wireframes where created in Balsamiq.

* Home-without modal:
![Alt text](/readme/wireframe/index-without-modal-wf.jpg)

* Home-with modal:
![Alt text](/readme/wireframe/index-with-modal-wf.jpg)

* 404 Customized page:
![Alt text](/readme/wireframe/404-wf.jpg)

#### Theme
When considering the website theme the general idea was to provide a robotic, calculator feeling for the user, to inspire the idea of a well documented and mathematical approach to their need.
Intention was to also create an enviorement that would be easy to understand and use.
I`ve opted to try and limit the amount of information in the page with the use of different placeholders for the input areas and to move larger amount of information inside modals easy to access.

#### Colour Selection
Colors where selected in line with the theme, but also to offer a high level of accessibility and contrast.
It has suffered several changes during the development process as I`ve wanted maintain clear and easy to read and print data.
The choice was also due to the amount of options we I have in regards of functionality and the interest to create a separation, or a uniqe identifier.

List of colors used:
![Alt text](/readme/other/colour-selection.jpg)


#### Font and text style
Text and font used are consistent across the website with variances in regards of decoration and size.
Font used was selected from Google Fonts:
![Alt text](/readme/other/font-style-used.jpg)

#### Imagery
Logo was designed using Canva wesite.

#### Features
1. GENERAL:
Website contains:
*One main page which provides all of the relevant data for the user:
  * A header section which contains a suggestive and centraly positioned logo; Under the logo 2 options are present that allow the user to to access the About and How to use information.
  * Data input area: where user provides the relevant data that needs to be analyzed.
  * A button area where all the relevant functions for the user can be accessed in a single location.
  * 4 hidden modals that will return information related to:
    * About content.
    * How to use the website.
    * Return a result recommandation when the CALCULATE ANSWER button is clicked.
    * Return a random recommandation when GENERATE RANDOM SELECTION is clicked.
  * A 404 page that allows the user to click on a return to home link.

Looking more into detils of this 2 pages:
2. MAIN PAGE: 
Looking into more detail, following elements/areas can be found on the page:
  * Header containing a large logo and relevant information on the website mission and how to use details
  * A user input area which is focused on 2 main sections:
    * A Criteria Section in which the user is required to provide their key criterias in their decission making process and score their importance.
    * The Options section in which the user will be required to name the options they want to compare and score how the fulfill the different characteristics on a scale from 1 to 10.
  * Buttons area which contains 4 elements:
    * CALCULATE ANSWER: which provides the trigger for a calculation that will return a recommended answer.
    * GENERATE RANDOM SELECTION: which provides the trigger to provide a recommandation based on a "coin-flip" type of logic.
    * RESET OPTION VALUE: considering that the criteria importance remains the same, allows the user to reset to the initial placeholder the scoring selected for each of the drop-downs under the 3 Options the user is allowed to compare.
    * Print as PDF: this button allows the user to not just print as PDF, but to open the print section of the browser in order to store either a hard or soft copy of the page and it`s recommandation. I`ve named it "Print as PDF" to recommend a more envioremental friendly option to the user, and at the end an option that will be easier to store and share.
  * Modals: which are hidden elements connected to 4 areas:
    * About
    * How to use
    * CALCULATE ANSWER
    * RANDOM SELECTION

3. 404 PAGE:
Page designed in order to provide 404 customized message and experience.

4. JAVA SCRIPT CONNECTED FEATURES:
* POURPOSE/OBJECTIVE - all accessible from a single area:
    ![Alt text](/readme/other/buttons-area.jpg)
  * Calculate function: 
      * Provides the user with a mathematical/calculated approach to their decission making process.
      * If the required fields are not entered, user will be notified to do so when CALCULATE ANSWER is clicked.
      ![Alt text](/readme/features/notification-data-not-entered.jpg)
      * Based on the data provided, the user can calculate a minimum of two Options, third Option being optional, and in the case where not selected, when user generates the answer it will be prompted in the relevant modal that it is not taken into consideration as it has missing data.

      3 options are selected with valid data entered:
      ![Alt text](/readme/features/calculate-feature-three-options.jpg)

      2 options are selected with valid data entered:
      ![Alt text](/readme/features/calculate-feature-two-options.jpg)

      * Calculation logic is based on a the average of a score for each individual criteria line, score calculated as a multiplication of the criteria importance and the score of the option for each criteria. Result is compared between each of the options compared, and the better one is returned as the recommandation.

      2 options are selected with equal results:
      ![Alt text](/readme/features/calculate-feature-two-options-equal.jpg)

      2 options are selected with different results:
      ![Alt text](/readme/features/calculate-feature-two-options.jpg)

      3 options are selected with different results:
      (/readme/features/calculate-feature-three-options.jpg)

      3 options are selected with equal results:
      (/readme/features/calculate-feature-three-options-equal.jpg)

      * Recommandation then is returned part of a modal.
  * Random generation function: Will provide a "coin-flip" type of recommandation based on a basic algorithm. It will be able to generate independent of any data being provided in the user input area. It`s functionality is very basic and can be used as a pure random selector if needed.
  (/readme/features/random-feature.jpg)

  * Reset option score values: it`s functionality is to allow the user to reset the score of their options with a single click of a button. It will not reset the value of the importance criteria as it is considered a key element that once set, should not change often

  Before reset:
  (/readme/features/reset-feature-values.jpg)

  After reset:
  (/readme/features/reset-feature-no-values.jpg)
  * Print function: it allows to open the browsers print window with a click of a button. It`s functionality is simple and straighforward.

* WEBSITE FUNCTIONALITY:

    About modal:
    ![Alt text](/readme/features/about-modal.jpg)

    About modal:
    ![Alt text]![Alt text](/readme/features/how-to-modal.jpg)

  * Modal window: where chosen as the prefered way to return a result in order not to overload main page and to be able to provide a large amount of data into a single area.
  * Modal open and close: modals will open based on different triggers on the page. When another modal is opened, the first one will close, so at all time, you can`t have more then 1 modal open on the page.

#### Accessibility
From an accessibility perspective, my goal was to create a clean website with data easy to read, positioned in a relevant manner for the user.
I`ve achieved this by:
* Writing semantic HTML
* Correct selection of text size, font and style in order to contrast well with the other elements of the page.
* Highly visible and relevant logo
* Use of alt attribute connected to the logo

Another area I was mindful of, was that all of the consideration above where not lost when using the website in smaller screen sizes.


#### Display size optimization
![Alt text](/readme/other/responsive-view.jpg)

Several size options where used when developing the responsive design.
Please see bellow a list and the main areas of impact when implemented. The main consideration is the use of flex and responsive technologies in order to support easier screen size optimization.

* under 1201px wide: mostly resizing of different elements but without major structural changes.
* under 1031px wide: user options area moves under the criteria area. Additional styling and resizing done.
* under 800px wide: additional styling and resizing done.
* under 510px wide: additional styling and resizing done.
* under 461px wide: additional styling and resizing done.
* under 660px height: additional styling and resizing done on modals.
* under 380px height: additional styling and resizing done on modals.
* min resolution tested was for iPhone SE.

General approach was to browse the different sizes with a step by step approach, and where needed, to operate the required changes.


## Testing and Validation
The website was tested for functionality and design using the following browsers: Mozilla, Chrome, Edge.
There where also other external tools listed in the section Technologies that where used to ensure correct website 
and code behaviour.
A formator was also used in order to clean and arrange code.

#### HTML
Tested all pages using W3C validator. Minimal errors identified in all pages, and corrections made, like for ex: duplications of containers(divs)
Issues identified and corrected until bellow pass marks were reached:
![Alt text](/readme/testing/index-html-test.jpg)
![Alt text](/readme/testing/404-html-test.jpg)


#### CSS
Tested CSS code using W3C validation service. Minimal errors identified.
Issues are fixed and corrected, the only item still open is the imported style sheet:
![Alt text](/readme/testing/CSS-test.jpg)


#### Accessibility Test
Accessibility test was done using Wave Report generator.
Issues identified where related to contrast and label missing on several input fields.
Corrections done where:
  * Changed color scheme in order to increase contrast.
  * Added labels and formated them in order to remove their visibility.
    An issue remains if you select all of the items in the page(drag over page elements or using CTRL+A) where the labels can be seen as present but hidden:

    ![Alt text](/readme/testing/hidden-labels.jpg)

Currently there are no errors and warnings reported using Wave:

![Alt text](/readme/testing/accessibility-testing.jpg)

#### Lighthouse
Perfect result obtained when testing for desktop and near perfect on mobile.
Testing was done in Incognito mode in Chrome in order to avoid browser extension interference.

Result desktop:
![Alt text](/readme/testing/lighthouse-desktop.jpg)

Result mobile:
![Alt text](/readme/testing/lighthouse-mobile.jpg)

#### Spellcheck
Website was checked using the W3C Spellchecker.
The only error found relates to using "Crt." instead of "Criteria" in order to provide more data into User Options scores drop-downs when resizing the webpage.
Code was also checked using the Word autocorrect function.

#### JavaScript
During the development of the website, a consistent amount of console.logs where used in order to test execution of all functions/code.

JShint was also used in order to validate if any warnings where raised.
During testing, several warnings where raised and corrected. Most significant correction was: "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics."
With support from Sean in CI, my code was improved and the warning eliminated.

Initial code:
```javascript
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
  button.addEventListener("click", function () {
    //Logs a message to the console log that a specific button was clicked, when it was clicked
    console.log("Button clicked: " + this.getAttribute("id"));
    if (this.getAttribute("id") === "calculate") {
      calculateAnswer();
    } else if (this.getAttribute("id") === "print") {
      printPageAsPDF();
    } else if (this.getAttribute("id") === "reset") {
      resetUserArea();
    } else if (this.getAttribute("id") === "random") {
      generateRandom();
    }
  });
}
```

JSHint analysis is bellow:
![Alt text](/readme/testing/jshint-testing.jpg)

Updated code:
```javascript
`document.addEventListener("DOMContentLoaded", function () {
  let buttons = [...document.getElementsByTagName("button")];
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      if (this.getAttribute("id") === "calculate") {
        calculateAnswer();
      } else if (this.getAttribute("id") === "print") {
        printPageAsPDF();
      } else if (this.getAttribute("id") === "reset") {
        resetUserArea();
      } else if (this.getAttribute("id") === "random") {
        generateRandom();
      }
    });
  });
});`
```

#### Local functionality tests
All tests performed considered both desktop and mobile version.
Link to full local functionality test: [TESTING.MD](https://github.com/mtopircean/project2/blob/main/TESTING.md)

#### Fixed bugs
During the development process, several bugs and errors where identified and fixed, with minor error still identified and active on the website.

1. Errors fixed:
* Design:
  * Modals overlaping when opened:

  * Modals not fitting smaller screens:


* Functionality:
  * Page print opening a second time when closing the page:
  ISSUE:
  FIX: 

  * When Pring page as PDF was triggered, it closes modals:
  ISSUE:
  FIX: 

  * Canculate Answer function not returning a result:
  ISSUE:
  FIX:

2. Errors known and not fixed:
* Design:
  * Blury text in How to Use modal:
  ISSUE:

* Functionality:
  *Random does not pull Option name:
  ISSUE

## Credits
#### Code Used:

* HTML and CSS similarities can be found to my first project submitted, but at a very basic and minor level.

* Took inspiration in defining the structure bellow from LovaMath project and adapted it to my requirements. Bellow is my code with inspiration taken from LoveMath:

```javascript
`document.addEventListener("DOMContentLoaded", function () {
  let buttons = [...document.getElementsByTagName("button")];
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      if (this.getAttribute("id") === "calculate") {
        calculateAnswer();
      } else if (this.getAttribute("id") === "print") {
        printPageAsPDF();
      } else if (this.getAttribute("id") === "reset") {
        resetUserArea();
      } else if (this.getAttribute("id") === "random") {
        generateRandom();
      }
    });
  });
});`
```

* Modal code written was established by taking inspiration in an example found on w3schools and adapted to my code and application. Bellow is my code with inspiration taken from this link:https://www.w3schools.com/howto/howto_css_modals.asp

```javascript
/*
* Following section is created in order to capture the different modals opening in the page.
* Majority of the functions will return a modal in order to capture their result or provide alerts.
* It was established by taking inspiration in a code format found on w3schools and adapted to my code and application.
* Decision was taken to remove the option to close modal when clicking outside of the box. If this would have been enabled, modals would automatically close when clicking
the print button.
* Principle of functionality is to pull html relevant data, define the modal that contains the text, including the close element, define open and close triggers.
*/
// About modal - opens the description of the page and tool created
let modalAbout = document.getElementById("header-about-modal");
let modalTriggerAbout = document.getElementById("header-about");
let modalCloseAbout = document.getElementById("modal-close-about");

modalTriggerAbout.onclick = function () {
  closeModal();
  modalAbout.style.display = "block";
};
modalCloseAbout.onclick = function () {
  modalAbout.style.display = "none";
};

// How to modal
let modalHow = document.getElementById("header-how-modal");
let modalTriggerHow = document.getElementById("header-how");
let modalCloseHow = document.getElementById("modal-close-how");

modalTriggerHow.onclick = function () {
  closeModal();
  modalHow.style.display = "block";
};
modalCloseHow.onclick = function () {
  modalHow.style.display = "none";
};

// Modal for calculateAnswer function
let submitModal = document.getElementById("submit-modal");
let buttonSubmit = document.getElementById("calculate");
let closeSubmit = document.querySelector(".submit-close");

buttonSubmit.onclick = function () {
  closeModal();
  submitModal.style.display = "block";
};
closeSubmit.onclick = function () {
  submitModal.style.display = "none";
};

//Modal for generateRandom function
let randomModal = document.getElementById("random-modal");
let buttonRandom = document.getElementById("random");
let closeRandom = document.querySelector(".random-close");

buttonRandom.onclick = function () {
  closeModal();
  randomModal.style.display = "block";
};
closeRandom.onclick = function () {
  randomModal.style.display = "none";
};
```

* Random generator, uses a piece of code for randomIndex that is taken from stackOverflow website and adapted to my code needs:

```javascript
`let randomIndex = Math.floor(Math.random() * options.length);`
```

#### Other
* Deployment instructions in GitHub copied from kera-cudmore different repo`s and following the article written by her on how to write a readme.
* Inspiration on readme structure taken from kera-cudmore repo`s and following the article written by her on how to write a readme..
* I want to also recognize Graeme Taylor - My Code Institute Mentor for providing guidance during the development process of this website.
* Thank you also to the Tutor Team in Code Institute for spending the time with me to fix and understand different issues regarding: modals, resizing issues, and a very serios issue related to push error from gitpod to github.
* Thanks to Sean from  the Support Team in CI for providing support in helping me improve the segment of code bellow in order to eliminate a warning from JShint:
"Functions declared within loops referencing an outer scoped variable may lead to confusing semantics."

## About Author
Marius Topircean is an aspiring software-developer on a journey to develop and learn his place into the developer community.

My contact details are:

Email: mtopircean@yahoo.com

Phone: +353857642212

Slack: Marius Topircean

Github: mtopircean  

Linkedin: [Marius Topircean](https://www.linkedin.com/in/marius-t-7b5592124)
