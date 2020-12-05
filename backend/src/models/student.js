import mongoose from "mongoose";
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: { type: String, required: true },
  yearOfBatch: { type: String, required: true },
  college: { type: Schema.Types.ObjectId, ref: "College" },
  skills: [{ type: String, required: true }],
});

const Student = model("Student", studentSchema);

export default Student;
