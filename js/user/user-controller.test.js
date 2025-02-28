const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test("add user to userController", () => {
  let user = new User(1234, "yair", "yair@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("user not in userController before adding", () => {
  let user = new User(5678, "Maria", "maria@example.com");
  expect(userController.getUsers()).not.toContain(user);
});

test("remove user to userController", () => {
  let user = new User(95, "yair", "yair@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});


test('remove non-existent user from userController', () => {
  let user = new User(95, "yair", "yair@generation.org");
  let initialUsers = userController.getUsers().length;
  userController.remove(user);
  expect(userController.getUsers().length).toBe(initialUsers);
});

test('find existing user by email', () => {
  let user = new User(1234, "yair", "yair@generation.org");
  userController.add(user);
  expect(userController.findByEmail("yair@generation.org")).toStrictEqual(user);
});


test('find non-existent user by email', () => {
  expect(userController.findByEmail("noexiste@example.com")).toBeUndefined();
});

test('find existing user by ID', () => {
  let user = new User(12, "yair", "yair@generation.org");
  userController.add(user);
  expect(userController.findById(12)).toStrictEqual(user);
});


test('find non-existent user by ID', () => {
  expect(userController.findById(15)).toBeUndefined();
});