import mongoose from "mongoose";
const { Schema, model } = mongoose;

const collegeSchema = new Schema({
  name: { type: String, unique: true, required: true },
  yearFounded: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  noOfStudents: { type: Number, required: true },
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

collegeSchema.index({ name: 1 });
const College = model("College", collegeSchema);

export default College;
