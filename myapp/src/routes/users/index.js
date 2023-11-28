const express = require("express");
const router = express.Router();
const users =
  "/Users/karlaherzo/Desktop/BACKEND2.0/Express/myapp/src/db/users.json";
const fs = require("fs");

//El router es una funcionalidad de express que ayuda a dministrar los endpoints de una manera mas limpia.
//Permite realizar mas opraciones como middelawares, manejador de errores, etc.

router.get("/getbyid/:id", (req, res) => {
  const { id } = req.params;
  fs.readFileSync(users, "utf-8", (err, users) => {
    if (err)
      return res
        .status(400)
        .send({ msg: "No se pudo abrir el archivo", err: err });
    users = JSON.parse(users);

    users.forEach((u) => {
      if (u.id == id) {
        return res.send({ msg: "Usuario encontrado", data: u });
      }
    });
    return res.status(404).send({ msg: "usuario no encontrado" });
  });
});

router.get("/hi", (req, res) => {
  res.status(201).send("Hello world testing router!");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.status(200).send(`Hello im working on params ${req.params.id}`);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send(`Hello ${req.body.name}`);
});
module.exports = router;
