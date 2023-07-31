import mongoose from "mongoose";
const { Schema } = mongoose;

const siteSchema = new Schema({
  coordonne: {
    longitude: Number,
    latitude: Number,
  },
});

const Site = mongoose.model("Site", siteSchema);

export { Site };
