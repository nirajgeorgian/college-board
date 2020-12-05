import mongoose from "mongoose";
const { Schema, model } = mongoose;

const courseSchema = new Schema({
  title: { type: String, unique: true, required: true },
});

courseSchema.index({ title: 1 });
const Course = model("Course", courseSchema);

export default Course;
