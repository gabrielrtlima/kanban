import mongoose from "mongoose";

export const ColumnSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true
  },
  taskIds: {
    type: [String],
    required: true,
    ref: "Task"
  }
})

export const Column = mongoose.model("Column", ColumnSchema);