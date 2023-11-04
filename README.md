# auto-login-jest
Automated Login and Email Notification System



"Hello everyone, today I'm excited to share a project that automates the login process for a web application and ensures timely email notifications for any delays. Let's explore how this system works."



"Our challenge was to automate the login process for a specific web application and provide immediate notifications if the login took longer than expected."



"We used Puppeteer for browser automation, Nodemailer for email notifications, and Jest for testing. Here's how our solution works:

Puppeteer navigates to the login page and inputs credentials.
If the login takes more than 15 seconds, an email notification is sent to the developer.
Jest handles the testing, ensuring the system's reliability."



Puppeteer launches a headless browser and simulates user actions.
Jest test case checks login time; if it exceeds 15 seconds, an email is sent.
Nodemailer handles the email notification process."
Slide 5: Demonstration

"Here's a live demonstration of our system:

Puppeteer logs in, monitors the time taken, and captures screenshots.
If the login exceeds 15 seconds, it triggers an immediate email notification to the developer.

"Our system offers:

Automated login for efficiency.
Real-time notifications for prompt issue resolution.
Reliable testing with Jest for robust performance."

 Conclusion

"In conclusion, our automated login and email notification system ensures seamless user experiences and swift responses to any login delays. 

first Step
--
npm install jest nodemailer nodemailer-smtp-transport puppeteer

--Create a new test file, for example, login.test.js. In this file, you'll write your Jest test case.

Step 2: Write the Test Case
In login.test.js

Step 3: Configure Jest
In your package.json file, add the following configuration to run your tests with Jest:

{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "node"
  }
}

Step 4: Run Your Tests
Run your tests using the following command: 
npm test
