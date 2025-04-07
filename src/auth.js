const { users } = require("./user");

function login(username, password) {
  if (!username || !password) {
    return "Username and password are required.";
  }

  const user = users.find((u) => u.username === username);

  if (!user) {
    return "User not found.";
  }

  if (user.password !== password) {
    return "Incorrect password.";
  }

  return true; // inloggning success
}

module.exports = {
  login,
};
