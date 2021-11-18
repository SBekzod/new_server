const express = require("express");

const router = express.Router();
router.get("/user", (req, res) => {
  res.json({ name: "Hakim", age: 32, nation: "uzbek" });
});

router.get("/dishes", (req, res) => {
  res.json({ name: "monti", price: 20000 });
});

router.get("/contacts", (req, res) => {
  res.json({ name: "Ilhom", number: 462 });
});

module.exports = router;
