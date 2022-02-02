import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    default: Date,
    required: true,
  },
});

export default mongoose.model("user", UserSchema);
