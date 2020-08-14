const mongoose = require("../connection");

const ShowSchema = mongoose.Schema({
  title:String,
  url:String,

});

const Show = mongoose.model("show", ShowSchema);

module.exports = Show;