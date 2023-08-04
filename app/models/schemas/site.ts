import mongoose from "mongoose";
const { Schema } = mongoose;

const siteSchema = new Schema({
  id: mongoose.Types.ObjectId,
  nom:{
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
  // Une ou plusieurs photo
  photos: {
    require: true,
    type: Array,
  },
  region: {
    require: false,
    type: String,
  },
  coordonne: {
    longitude: Number,
    latitude: Number,
  },
  avis: {
    note: Number, // note sur 5 (étoiles),
    commentaires: String, // Commentaires
    type: Array
  },
});

const Site = mongoose.model("Site", siteSchema, 'site');

export { Site };
