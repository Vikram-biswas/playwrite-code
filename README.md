# playwrite-code

Steps 1 (Initial setup and configuration):
1. Download and install nodejs in local (latest version is recommended)
2. Download and install vs code 
3. Download and install git
4. Register or login to github and create a repository. Clone the repository to your local


Step 2 (Add extensions and libraries):
1. Open cmd and navigate to the cloned repository
2. Type 'code .' to open vs code.
3. Now, from extensions menu, install playwright 
4. Once it is installed, type "npm init playwright" or type cntrl + Shft + P to open search window and search for playwright. Then select playWright and install.
5. Please select github and javaScript option while installing. Once the installed is done, kindly verify the project has all the required files added.
6. From extensions, down cucumber plugin as well. Once installed type 'npm install @cucumber/cucumber' to install the cucumber for your project.


Step 3 (project Implementation):
1. I have tried to implement this project with playwright with cucumber and followed page object model.
2. First I have created feature folder, where I have created login.feature file which basically stores my scenarios list. Then I have created a sub folder under feature called stepDefinition and under this folder I have created a JS file called stepDefinitions.js
3. To run the tests using cucumber, I have added cucumber-json file where I have provided the feature path abd stepdefinition path.
4. I have created utils folder under which I have created pageObject.js file where I have added all the locators.
5. Kindly refer the login.feature file for scenario , stepDefinition file for function implementation and pageObject file for locators.


Step 4 (project Execution):
1. Kindly note, currently the tests will run headless mode. 
In stepDefinition class > Given method, we can update headless: False, if we want to run in browser. Below the is the code line for reference
  (stepDefinitions)line 12: browser = await chromium.launch({ headless: True });
2. To run the project , navigate to the project location > open cmd and type 'npm test' enter.
   Note: we can also run the project by clicking on exe.bat file



