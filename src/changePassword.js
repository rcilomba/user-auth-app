const { users } = require("./user");
const { isValidPassword } = require("./register");

function changePassword(username, oldPassword, newPassword) {
  const user = users.find((u) => u.username === username);

  if (!user) {
    return "User not found.";
  }

  if (user.password !== oldPassword) {
    return "Old password is incorrect.";
  }

  if (oldPassword === newPassword) {
    return "New password must be different from old password.";
  }

  if (!isValidPassword(newPassword)) {
    return "New password does not meet security requirements.";
  }

  user.password = newPassword;
  return true;
}

module.exports = {
  changePassword,
};
