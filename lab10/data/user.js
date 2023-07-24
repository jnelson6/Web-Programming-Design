const bcrypt = require("bcryptjs");
const saltRounds = 10;
const connection = require("../config/mongoConnection");

const createUser = async (username, password) => {
  if (!username || !password) {
    throw "Either username or password was not provided";
  }

  if (username.includes(" ")) {
    throw "Username can't have empty spaces";
  }

  if (password.includes(" ")) {
    throw "Password can't have empty spaces";
  }

  if (username.trim().length < 4) {
    throw "Username should be at least 4 letters";
  }

  if (password.trim().length < 6) {
    throw "Password should be at least 6 letters";
  }

  const db = await connection.connectToDb();
  const users = await db
    .collection("users")
    .find({ username: username })
    .toArray();

  if (users.length > 0) {
    throw "Username already exists";
  } else {
    const hash = await bcrypt.hash(password, saltRounds);
    // hash is hashed password
    var myobj = { username, password: hash };
    const newUser = await db.collection("users").insertOne(myobj);
   // connection.closeConnection();
    return { userInserted: true };
  }
};

const checkUser = async (username, password) => {
  if (!username || !password) {
    throw "Either username or password was not provided";
  }

  if (username.includes(" ")) {
    throw "Username can't have empty spaces";
  }

  if (password.includes(" ")) {
    throw "Password can't have empty spaces";
  }

  if (username.trim().length < 4) {
    throw "Username should be at least 4 letters";
  }

  if (password.trim().length < 6) {
    throw "Password should be at least 6 letters";
  }

  const db = await connection.connectToDb();
  const user = await db.collection("users").findOne({ username: username });
  //connection.closeConnection();
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result)
      return {
        authenticated: true,
      };
  } else {
    throw "Either username or password is invalid";
  }
};

module.exports = { createUser, checkUser };
