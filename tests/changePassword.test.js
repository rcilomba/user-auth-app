const { changePassword } = require("../src/changePassword");
const { seedUsers, users } = require("../src/user");

beforeEach(() => {
  seedUsers(); // återställer användare före varje test
});

test("should change password successfully", () => {
  const result = changePassword("Alice", "Password1", "NewPass1A");
  expect(result).toBe(true);
  expect(users.find((u) => u.username === "Alice").password).toBe("NewPass1A");
});

test("should fail if user is not found", () => {
  const result = changePassword("Charlie", "Password1", "NewPass1A");
  expect(result).toBe("User not found.");
});

test("should fail if old password is incorrect", () => {
  const result = changePassword("Alice", "WrongOld", "NewPass1A");
  expect(result).toBe("Old password is incorrect.");
});

test("should fail if new password is same as old password", () => {
  const result = changePassword("Alice", "Password1", "Password1");
  expect(result).toBe("New password must be different from old password.");
});

test("should fail if new password is weak", () => {
  const result = changePassword("Alice", "Password1", "short");
  expect(result).toBe("New password does not meet security requirements.");
});
