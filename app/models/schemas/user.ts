import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: mongoose.Types.ObjectId,
  nom: {
    require: true,
    type: String,
  },
  prenom: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    unique: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  salt: String,
});

const User = mongoose.model("User", userSchema, 'user');

export { User };
