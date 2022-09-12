const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paletteSchema = new Schema(
  {
    title: { type: String, required: true },
    selector1: { type: String },
    selector2: { type: String },
    selector3: { type: String },
    selector4: { type: String },
    selector5: { type: String },
  },
  { timestamps: true }
);

const Palette = mongoose.model("Palette", paletteSchema);
module.exports = Palette;
