import { College, Student } from "../models";

/**
 * middleware to attach college when queried by id
 */
export const attachCollege = async (req, res, next) => {
  const college = await College.findById(req.params.id);

  if (!college) {
    return res.status(404).send({
      status: false,
      message: `no college found with this id: ${req.params.id}`,
    });
  }

  res.college = college;
  next();
};

/**
 * fetch all colleges
 */
export const getAllColleges = async (req, res) => {
  const allColleges = await College.find().populate("courses").lean();

  return res.send(allColleges);
};

export const getSingleCollege = async (req, res) => {
  const college = res.college;

  const students = await Student.find({ college: college.id }).lean();

  const recommendedColleges = await College.find({
    $or: [
      { courses: { $in: [college.courses] } },
      { yearFounded: college.yearFounded },
      { state: college.state },
      { country: college.country },
    ],
  }).lean();

  return res.send({ college, recommendedColleges, students });
};

export const getRecommendedCollege = async (req, res) => {
  const college = res.college;

  const recommendedColleges = await College.find({
    $or: [
      { courses: { $in: [college.courses] } },
      { yearFounded: college.yearFounded },
      { state: college.state },
      { country: college.country },
    ],
  }).lean();

  return res.send(recommendedColleges);
};
