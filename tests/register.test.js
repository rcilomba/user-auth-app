const { register, isValidPassword } = require("../src/register");
const { users, seedUsers } = require("../src/user");

beforeEach(() => {
  seedUsers(); // Återställ användarlistan före varje test
});

test("should not register a user with an existing username", () => {
  const result = register("Alice", "NewPassword1");
  expect(result).toBe("Username already exists.");
});

test("should reject weak passwords", () => {
  const result = register("Charlie", "short");
  expect(result).toBe("Password does not meet security requirements.");
});

test("should register a new user with strong password", () => {
  const result = register("Charlie", "StrongPass1");
  expect(result.username).toBe("Charlie");
  expect(users.some((u) => u.username === "Charlie")).toBe(true);
});
