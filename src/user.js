class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// lista på alla användare
const users = [];

// återställ användare för tester
function seedUsers() {
  users.length = 0;
  users.push(new User("Alice", "Password1"));
  users.push(new User("Bob", "SecurePass2"));
}

// hämta användarlistan (för tester)
function getUsers() {
  return users;
}

module.exports = {
  User,
  users,
  seedUsers,
  getUsers,
};
