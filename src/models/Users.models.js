import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      role: ["user", "admin"],
      default: "user",
    },
    varificationToken: {
      type: String,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;