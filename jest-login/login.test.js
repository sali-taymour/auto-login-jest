const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");
const fs = require("fs");

describe("Login and Email Test", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: "new" });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Login and Send Email if Login Takes More Than 15 Seconds", async () => {
    const startTime = Date.now();
    try {
      // Navigate to the login page
      await page.goto(
        ""
      );
      await page.waitForTimeout(1000);

      await page.type("#inputUsername", "username");
      await page.waitForTimeout(1000);
      await page.type("#inputPassword", "password");
      await page.waitForTimeout(1000);
      await page.click("#submitLogin");
      await page.waitForTimeout(9000);
      
      await page.waitForSelector('.class', { timeout: 30000 });

      const loginTime = Date.now() - startTime;

      // Log the result
      fs.writeFileSync(
        "login-result.txt",
        `Login successful in ${loginTime}ms`
      );
    } catch (error) {
      // Handle login failure
      console.error(
        "Login failed or took more than 10 seconds:",
        error.message
      );

      // Send email to developer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "....@gmail.com", // Replace with your email
          pass: "password", // Replace with your email password or use environment variables
        },
      });

      const mailOptions = {
        from: ".....@gmail.com", // Replace with your email
        to: ".......@example.com", // Replace with developer's email
        subject: "Login Failed or Took Too Long",
        text: `Login attempt took more than 10 seconds.\nError message: ${error.message}`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending email:", err);
        } else {
          console.log("Email sent to developer:", info.response);
        }
      });

      // Log the failed result
      fs.writeFileSync(
        "login-result.txt",
        `Login failed or took more than 10 seconds: ${error.message}`
      );
    }
 
    await page.screenshot({ path: "screenshot.png" });
    await page.evaluate(() => {
      debugger;
    });
  }, 40000);
});
