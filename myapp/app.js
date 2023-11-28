//rouutes

const userRoutes = require("/Users/karlaherzo/Desktop/BACKEND2.0/Express/myapp/src/routes/users/index.js");

const express = require("express");
const app = express();
const port = 3000;

//Estos son middelawares y siempre van arriba de los endpoints.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hi", (req, res) => {
  res.send("Hello World w get!");
});

app.post("/", (req, res) => {
  res.status(201).send("Hello world post!");
});

app.delete("/", (req, res) => {
  res.status(201).send("Hello world with delete!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/users", userRoutes);
