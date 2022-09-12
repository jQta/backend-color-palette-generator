const Palette = require("../models/Palette.model");

const getAllPalettes = async (req, res, next) => {
  try {
    const palette = await Palette.find();
    res.status(200).json(palette);
  } catch (err) {
    return next(err);
  }
};

const postPalette = async (req, res, next) => {
  try {
    const newPalette = new Palette(req.body);
    const createdPalette = await newPalette.save();
    return res.status(201).json(createdPalette);
  } catch (error) {
    return next(error);
  }
};

const deletePalette = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Palette.findByIdAndDelete(id);
    return res.status(200).json("Palette deleted successfully!");
  } catch (eror) {
    next(eror);
  }
};

module.exports = { getAllPalettes, deletePalette, postPalette };
