const express = require("express");
const app = express();
const collectionData = require("./Mongo");
const cors = require("cors");

// const middleware1 = (req, res, next) => {
//   console.log("Middleware 1");
//   next();
// };

// const middleware2 = (req, res, next) => {
//   console.log("Middleware 2");
//   next();
// };

// const appRouter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("Please provide age");
//   } else if (req.query.age < 20) {
//     res.send("you are not access to the page.");
//   } else {
//     next();
//   }
// };

// app.use(appRouter);

// const userLogin = (req, res, next) => {
//   const username = req.query.username;

//   if (!username) {
//     res.send("Please provide a username");
//   } else if (username !== "Ankitha") {
//     res.send("Access denied. Invalid username");
//   } else {
//     next();
//   }
// };

// app.use(userLogin);

// app.get("/login", (req, res) => {
//   res.send("User successfully logged In");
// });

// app.post("/login/user", (req, res) => {
//   res.send("Successfull posted");
// });

// app.put("/login/user", (req, res) => {
//   res.send("put function");
// });

// app.patch("/login/user", (req, res) => {
//   res.send("patch function");
// });

// app.delete("/login/user", (req, res) => {
//   res.send("delete function");
// });
// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });

// app.get("/user", (req, res) => [res.send("welcome to user page")]);

// app.get("/", (req, res) => {
//   try {
//     res.json({ message: "Hello world" });
//     console.log("Application is working");
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/hello", function (req, res, next) {
//   next();
//   console.log("next middleware");
//   res.json({ message: "next middleware" });
// });

// app.get("/link1", middleware1, (req, res) => {
//   res.json({ message: "First middleware" });
// });

// app.get("/link2", middleware2, (req, res) => {
//   res.json({ message: "second middleware" });
// });

const PORT = process.env.port || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//POST or CREATE method
app.post("/user/data", async (req, res) => {
  const { id, name, age, degree, result } = req.body;

  const data = {
    id: id,
    name: name,
    age: age,
    degree: degree,
    result: result,
  };

  try {
    const check = await collectionData.findOne({ name: name });
    if (check) {
      res.send("name already exists");
    } else {
      await collectionData.insertMany([data]);
      res.send("Successfully saved data");
    }
  } catch (error) {
    res.send("Failed to save data", error);
  }
});

const router = express.Router();

//GET all user
app.get("/users", async (req, res) => {
  try {
    const users = await collectionData.find();
    res.json(users);
  } catch (error) {
    res.send("Cannot get the users");
  }
});

//GET method by id
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await collectionData.findOne({ id: id });
    if (user) {
      res.json(user);
    } else {
      res.send("User not found");
    }
  } catch (error) {
    res.send("Error while fetching the data");
  }
});

//PUT or Update method by id
app.put("/user/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name, age, degree, result } = req.body;

  const newData = {
    id: id,
    name: name,
    age: age,
    degree: degree,
    result: result,
  };
  try {
    const user = await collectionData.findOneAndUpdate(
      { id: id },
      { $set: newData }
    );
    if (user) {
      res.send("User modified successfully");
    } else {
      res.send("User not found");
    }
  } catch (error) {
    res.send("Error while fetching the data");
  }
});

// DELETE by ID

app.delete("/user/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await collectionData.findOneAndDelete({ id: id });
    res.send("Successfully deleted the data");
  } catch (error) {
    res.send("User not found");
  }
});

// DELETE all data

app.delete("/user/delete/", async (req, res) => {
  try {
    await collectionData.deleteMany();
    res.send("Successfully deleted all the data");
  } catch (error) {
    res.send("User not found");
  }
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
