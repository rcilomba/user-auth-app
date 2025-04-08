const readline = require("readline-sync");
const { register } = require("./register");
const { login } = require("./auth");
const { changePassword } = require("./changePassword");
const { seedUsers } = require("./user");

seedUsers(); // skapa testanvändare direkt

let running = true;

while (running) {
  console.log("\n== Main menu ==");
  console.log("1. Create new user");
  console.log("2. Sign in");
  console.log("3. Change password");
  console.log("4. Finish");

  const choice = readline.question("Choose an alternative (1-4): ");

  switch (choice) {
    case "1":
      const newUsername = readline.question("Enter username: ");
      const newPassword = readline.question("Enter password: ", {
        hideEchoBack: true,
      });
      const regResult = register(newUsername, newPassword);
      console.log(regResult);
      break;

    case "2":
      const loginUser = readline.question("Enter username: ");
      const loginPass = readline.question("Enter password: ", {
        hideEchoBack: true,
      });
      const loginResult = login(loginUser, loginPass);
      console.log(loginResult === true ? "Login succeeded!" : loginResult);
      break;

    case "3":
      const cpUser = readline.question("Enter username: ");
      const oldPass = readline.question("Enter current password: ", {
        hideEchoBack: true,
      });
      const newPass = readline.question("Enter new password: ", {
        hideEchoBack: true,
      });
      const cpResult = changePassword(cpUser, oldPass, newPass);
      console.log(
        cpResult === true ? "Password changed successfully!" : cpResult
      );
      break;

    case "4":
      running = false;
      console.log("Goodbye!");
      break;

    default:
      console.log("Invalid choice. Please try again.");
  }
}
