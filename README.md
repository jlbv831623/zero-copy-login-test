1️⃣ Part 1 – Login Automation README.md
# Part 1 - Login Automation Test

## Overview
This test automates the login functionality on [The Internet](https://the-internet.herokuapp.com/login) using Cypress (or your chosen framework).

### Test Cases
1. Valid login (username: `tomsmith`, password: `SuperSecretPassword!`)
2. Invalid username
3. Invalid password
4. Missing username and/or password

### Assertions
- Success message for valid login
- Error messages for invalid credentials or missing fields
- URL redirection

## Tools / Libraries
- Cypress (or Selenium / Playwright)
- Node.js v18+

## Setup Requirements
1. Install Node.js and npm
2. Install dependencies:
   ```bash
   npm install

How to Run

Open Cypress GUI:

npm run cypress:open


Run all tests headless:

npm run cypress:run
