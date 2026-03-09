const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
       type: String,
       required: true,
    },
    description: {
        type: String,
    },
    image: {
      filename:String,
      url:String,  
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true, // add this
    },
    country: {
      type: String,
      required: true, // add this
    },
});
const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;

