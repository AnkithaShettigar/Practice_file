const mongoose = require("mongoose");
const DB =
  "mongodb+srv://Ankitha:ankitha@cluster0.zxuiba0.mongodb.net/CrudOperation?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("failed to connect with DB");
  });

const newSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const collectionData = mongoose.model("details", newSchema);
module.exports = collectionData;
