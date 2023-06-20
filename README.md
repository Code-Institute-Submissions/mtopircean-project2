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
    * [Local functionality tests](#local-functionality-tests)
    * [Fixed bugs](#fixed-bugs)
* [Credits](#credits)
    * [Code Used](#code-used)
    * [Video](#video)
    * [Photography](#photography)
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
* Users are expected to integrate the application as as a standard part of their decission making process due to it`s simplicity and still informed way of determining it`s recommandations.

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
* GENERAL:
Website contains:
    * One main page which provides all of the relevant data for the user:
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
* MAIN PAGE: 
Looking into more detail, following elements/areas can be found on the page:
    * Header containing a large logo and relevant information on the website mission and how to use details
    * A user input area which is focused on 2 main sections:
        * A Criteria Section in which the user is required to provide their key criterias in their decission making process and score their importance.
        * The Options section in which the user will be required to name the options they want to compare and score how the fulfill the different characteristics on a scale from 1 to 10.
    *Buttons area which contains 4 elements:
        * CALCULATE ANSWER: which provides the trigger for a calculation that will return a recommended answer.
        * GENERATE RANDOM SELECTION: which provides the trigger to provide a recommandation based on a "coin-flip" type of logic.
        * RESET OPTION VALUE: considering that the criteria importance remains the same, allows the user to reset to the initial placeholder the scoring selected for each of the drop-downs under the 3 Options the user is allowed to compare.
        * Print as PDF: this button allows the user to not just print as PDF, but to open the print section of the browser in order to store either a hard or soft copy of the page and it`s recommandation. I`ve named it "Print as PDF" to recommend a more envioremental friendly option to the user, and at the end an option that will be easier to store and share.
    * Modals: which are hidden elements connected to 4 areas:
        * About
        * How to use
        * CALCULATE ANSWER
        * RANDOM SELECTION

* 404 PAGE:
Page designed in order to provide 404 customized message and experience.

* JAVA SCRIPT CONNECTED FEATURES:
    * Pourpose:
        *
    * Website functionality and user support:
        *

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
Please see bellow a list and the main areas of impact when implemented:

* from 1200px wide and down: Mostly resizing of different elements but without major structural changes.
* from 954px wide and down: Elements moved into a stacked format on all pages in order to display correctly, one elements per full page width. The other change is the resizing and positioning of Menu under Logo in a central position.
* from 800px wide and down: Mostly resizing of different elements but without other major structural changes.
* from 600px wide and down: Home menu tab replaced with font-awesome home icon by hiding the standard menu and moving to the second variant optimized for mobile. The other major change is the removal of the timeline feature in the media page, change done due to reduced real-estate on lower screen-size devices.
* from 425px wide and down: Mostly resizing of different elements but without other major structural changes.
* min resolution tested was for iPhone SE, but verified that resolutions under la Galaxy Fold still behave well with major change being a shift in menu structure to a stacked version vs a side by side tab presentation.



## Testing and Validation
The website was tested for functionality and design using the following browsers: Mozilla, Chrome, Edge.
There where also other external tools listed in the section Technologies that where used to ensure correct website 
and code behaviour.
A formator was also used in order to clean and arrange code.

#### HTML
Tested all pages using W3C validator.
Several errors identified in all pages, and corrections made, like for ex:
* missing lang attribute and doctype in 404 page
* duplications of containers or double used closing container commands

Issues identified and corrected until bellow pass mark was reached:
![Alt text](/readme/testing/html-test.jpg)

#### CSS
Tested CSS code using W3C validation service.
Several errors identified, majority around using commands not valid or doubled: background-colour same as border colour for ex.

Issues are fixed and corrected, the only item still open is the imported style sheet:
![Alt text](/readme/testing/css-validator.jpg)


#### Accessibility Test
Accessibility test was done using Wave Report generator, for each of the pages.
There where several issues identified which where corrected, mostly due to font colour used on Menu tabs. Media and About page initially used a white text colour on a yellow background. This was corrected with the final version currently in place and errors fixed.

There are 3 errors still in place:
* 2 impacting all pages due to icons being used with a link to a page associated. Since the icons don`t have text, errors where not fixed but they should not impact user experience as the icons used present very suggestive meaning, and generaly used in web-development.
* 1 error impacting the form redirect page(page after submission) and this is due to the redirect function of the page.
![Alt text](/readme/testing/accessability-test.jpg)

#### Lighthouse
Tested all pages with good overall performance results.

* Home desktop  
![Alt text](/readme/testing/home-desktop-lighthouse.jpg)
* Home mobile  
![Alt text](/readme/testing/home-mobile-lighthouse.jpg)
* About desktop  
![Alt text](/readme/testing/about-desktop-lighthouse.jpg)
* About mobile  
![Alt text](/readme/testing/about-mobile-lighthouse.jpg)
* Media desktop  
![Alt text](/readme/testing/media-desktop-lighthouse.jpg)
* Media mobile  
![Alt text](/readme/testing/media-mobile-lighthouse.jpg)
* Contact desktop  
![Alt text](/readme/testing/contact-desktop-lighthouse.jpg)
* Contact mobile  
![Alt text](/readme/testing/contact-mobile-lighthouse.jpg)
* 404 desktop  
![Alt text](/readme/testing/404-desktop-lighthouse.jpg)
* 404 mobile  
![Alt text](/readme/testing/404-mobile-lighthouse.jpg)

#### Spellcheck
All webpages checked for spellcheck error using the W3C Spellchecker.
The only errors not fixed are due to specific wording that can`t be changed.
List of errors not corrected:
"Kilkenny"
"NEPSIS"
"Nepsis"
"Vitovnica"
"th"
"Aegina"
"Chryssavgis"
"Farmington"
"Gaitanos"
"IFRAME"
"Kallistos"
"Kilkenny"
"Nectarios"
"Parthene"
"Petros"
"Theotokarion"
"Truebenbach"
"doron"
"paraliturgical"
"IFRAME" - Not showing on website
"Kilkenny"
"Lisduggan"
"bd"
"bdb"
"dbcaacda"
"fd"
"sLisduggan"
"sSaint"
"sie"
"xfab

Code was also checked using the Word autocorrect function.

#### Local functionality tests
All tests performed considered both desktop and mobile version.
Link to full local functionality test: [TESTING.MD](https://github.com/mtopircean/project1/blob/main/TESTING.md)

#### Fixed bugs

Majority of bugs and errors where addressed when dealing with the development of each individual section, and where considered a step in completion of different sections.

* HOME Page quote section not being displayed completly: resized the margins of the section.
```
#quote {
    position: relative;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    font-style: italic;
    font-size: 1rem;
}
```

* MEDIA Page footer rising on top of the last video: resized margins of the video sections in order to create a separation against the footer.
```
#all-video {
    float: right;
    width: 84%;
    margin-right: 20px;
    margin-bottom: 40px;
}
```

* MEDIA Page timeline error when clicking a specific month not visible in the video section. Error was causing the display to flicker and return to current section: error fixed by removing duplicate code added by mistake during development.

* HTML W3C validator testing, highlighting error "The frameborder attribute on the iframe element is obsolete": Error fixed based on guideline from Benji_5P_cohort_lead on removing the frameborder element from iframe.

*After a zoom in was spotted when opened website in desktop browser, it was identified that a padding on the header was creating a misalignment with other elements in other pages.
Once corrected this triggered several adjustments that had to be done in order to realign elements. Corrections took place on all pages and touched mostly on size of elements, padding and margin values.

No other known bugs or errors.

## Credits
#### Code Used:
YouTube and Google Maps iframe code used for Maps in Contact page and Videos in Media page.
Style on submit button in the contact form was inspired from the structure of the submit button from the Love Running Project.

#### Video:
Video sources where taken from YouTube:
* April video: GreekOrthodoxChurch YouTube Channel
* March video: Adoration of the Cross YouTube Channel
* February video: Greek Orthodox Metropolis of Detroit YouTube Channel
* January video: Matt Whitman YouTube Channel

#### Photography:
* Home page Hero Image: credit to [Zamfir Constantin](https://www.zamfirphoto.com/)
* Contact page photos: sourced from [Pexels](https://www.pexels.com/)

#### Other
* Deployment instructions in GitHub copied from kera-cudmore different repo`s and following the article written by her on how to write a readme.
* Inspiration on readme structure taken from kera-cudmore repo`s and following the article written by her on how to write a readme..


## About Author
Marius Topircean is an aspiring software-developer who initiated it`s journey in coding with this first project.

My contact details are:

Email: mtopircean@yahoo.com

Phone: +353857642212

Slack: Marius Topircean

Github: mtopircean  

Linkedin: [Marius Topircean](https://www.linkedin.com/in/marius-t-7b5592124)
