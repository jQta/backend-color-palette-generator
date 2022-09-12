const express = require("express");
const router = express.Router();

const { getAllPalettes, deletePalette, postPalette } = require("../controllers/Palette.controller");

router.get("/", getAllPalettes);
router.post("/add", postPalette);
router.delete("/:id", deletePalette);

module.exports = router;
