const prompt = require("prompt-sync")();
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

  const choice = prompt("Choose an alternative (1-4): ");

  switch (choice) {
    case "1":
      const newUsername = prompt("Enter username: ");
      const newPassword = prompt("Enter password: ");
      const regResult = register(newUsername, newPassword);
      console.log(regResult);
      break;

    case "2":
      const loginUser = prompt("Enter username: ");
      const loginPass = prompt("Enter password: ");
      const loginResult = login(loginUser, loginPass);
      console.log(loginResult === true ? "Login succeeded" : loginResult);
      break;

    case "3":
      const cpUser = prompt("Enter username: ");
      const oldPass = prompt("Enter current password: ");
      const newPass = prompt("Enter new password: ");
      const cpResult = changePassword(cpUser, oldPass, newPass);
      console.log(cpResult === true ? "Password changed" : cpResult);
      break;

    case "4":
      running = false;
      console.log("Ending...");
      break;

    default:
      console.log("Invalid choice. Please try again.");
  }
}
