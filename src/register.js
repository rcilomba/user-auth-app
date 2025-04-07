const { User, users } = require("./user");

// lösenordskrav
function isValidPassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

function register(username, password) {
  if (users.find((u) => u.username === username)) {
    return "Username already exists.";
  }

  if (!isValidPassword(password)) {
    return "Password does not meet security requirements.";
  }

  const newUser = new User(username, password);
  users.push(newUser);
  return newUser;
}

module.exports = {
  register,
  isValidPassword,
};
