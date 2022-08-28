The project for testing the telnyx website by cypress framework and cucumber preprocessor
Available scripts:
    
    npm run test - run tests in headless mode
    npm run cypress:open - open headed cypress framework
    npm run report:generate - create reports folder and add html test run report to it

The project uses a cucumber-json-formatter, so if you're going to use Win, please 
change attribute "formatter" to "./helper/cucumber-json-formatter.exe" in the 
.cypress-cucumber-preprocessor.json file, like this:
    
    {
        "json": {
            "enabled": true,
            "output": "jsonlogs/log.json",
            "formatter": "./helper/cucumber-json-formatter.exe"
        },
        ...
    }
    
If you use MacOS or Linux, you need to make this file executable:
    chmod +x cucumber-json-formatter

For verify that you can run it:
    cucumber-json-formatter --help

For MacOS, you may get a security warning from MacOS. If you do, open System Preferences. 
Go to Security Settings. You should see a question asking if you want to open it anyway. Say yes.
