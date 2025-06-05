import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  coverImage: {
    type: String, 
    default: "",
  },
  ratings: {
    type: Number,
    default: 0,
  },
  totalReviews: {
    type: Number,
    default: 0, 
  },
},{timestamps: true});

const Book = mongoose.model("Book", bookSchema);

export default Book;
