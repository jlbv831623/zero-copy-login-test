
# Login Automation Test – Cypress

This project contains automated tests for validating the **login functionality** using **Cypress**, following a **Page Object Model (POM)** structure.

The application under test:

https://the-internet.herokuapp.com/login

---

## 📁 Project Structure

project/
│── cypress/
│ ├── e2e/
│ │ └── login.cy.js
│ ├── pages/
│ │ ├── LoginPage.js
│ │ └── InventoryPage.js
│ └── support/
│ └── commands.js
│
│── cypress.config.js
│── package.json
│── README.md

---

## 🚀 Installation

Make sure you have **Node.js** installed.

Then run:

```bash
npm install

```


▶️ How to Run the Tests

To open the Cypress UI:

npx cypress open


To run all tests in headless mode:

npx cypress run

🧪 Test Scenarios Covered

The following test cases are included:

✔️ Valid login

❌ Invalid username

❌ Invalid password

❌ Missing username

❌ Missing password

✔️ Assertion of success message

✔️ Assertion of error messages

✔️ URL validation after successful login

🏗️ Page Object Model (POM)

This project follows the Page Object Model pattern:

LoginPage.js
Contains selectors and actions related to the login page.

InventoryPage.js
Contains assertions and interactions after a successful login.

This pattern improves maintainability, scalability, and clarity.

🛠 Requirements

Node.js ≥ 16

Cypress ≥ 15

Visual Studio Code (optional)

👤 Author

QA Engineer Juan L. Baqueiro (Automated test suite created as part of a QA engineering technical assessment).

### 🤖 AI Assistance
Some parts of this project were supported using ChatGPT for code generation and troubleshooting.  
All code was reviewed, corrected, and adapted manually.
