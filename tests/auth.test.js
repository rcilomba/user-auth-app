const { login } = require("../src/auth");
const { seedUsers } = require("../src/user");

beforeEach(() => {
  seedUsers(); // nollställer användare före varje test
});

test("should login successfully with correct credentials", () => {
  const result = login("Alice", "Password1");
  expect(result).toBe(true);
});

test("should fail if username is missing", () => {
  const result = login("", "Password1");
  expect(result).toBe("Username and password are required.");
});

test("should fail if password is missing", () => {
  const result = login("Alice", "");
  expect(result).toBe("Username and password are required.");
});

test("should fail if username does not exist", () => {
  const result = login("Charlie", "SomePass1");
  expect(result).toBe("User not found.");
});

test("should fail if password is incorrect", () => {
  const result = login("Alice", "WrongPass");
  expect(result).toBe("Incorrect password.");
});
