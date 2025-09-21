import mongoose from "mongoose";

// Here two objects were added
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } // createdAt and updatedAt
);

// Create User model based on the userSchema
const User = mongoose.model("User", userSchema);

export default User;
