const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://vishal_sharma:sharma2003@cluster0.s7zv0bs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};
