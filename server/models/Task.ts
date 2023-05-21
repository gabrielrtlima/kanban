import mongoose from "mongoose";


export const TaskSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: false
  },
  description: {
    type: String,
    required: false,
    default: ""
  },
  user: {
    type: [String],
    required: true,
    ref: "User"
  }

}, { timestamps: true });

export const Task = mongoose.model("Task", TaskSchema);
