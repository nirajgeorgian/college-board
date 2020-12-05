import express from "express";
import faker from "faker";
import { Course, Student, College } from "../models";

const studentJoiningYears = [2000, 2001, 2002, 2003, 2004];
const collegeOpeningYears = [1990, 2000, 1945, 1947, 1850];
const allCourses = [
  "Computer Science and Engineering",
  "Mechanical Engineering",
  "Electronics and Communication Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Aeronautical Engineering",
  "Biotechnology Engineering",
];
const allSkills = [
  "java",
  "javascript",
  "c++",
  "project management",
  "database administrator",
  "devops",
  "docker",
  "CI/CD Pipeline",
  "designer",
  "figma",
  "apache kafka",
  "elasticsearch",
  "unity 3d",
  "game designing",
  "blender",
];

const getRandomValue = (years) => {
  return years[Math.floor(Math.random() * years.length - 1) + 1];
};

const generateSkills = () => {
  const skills = [];
  for (let i = 0; i < Math.ceil(Math.random() * allSkills.length); i++) {
    skills.push(getRandomValue(allSkills));
  }

  return skills;
};

/**
 * generate fake data for course schema
 */
const generateCourseData = async () => {
  const courses = [];
  for (let i = 0; i < allCourses.length; i++) {
    courses.push({
      title: allCourses[i],
    });
  }

  await Course.insertMany(courses);
};

/**
 * generate fake data for college schema
 */
const generateCollegesData = async () => {
  const colleges = [];
  for (let i = 0; i < 100; i++) {
    const fakeCourses = [];
    const courses = await Course.find().lean();
    const noOfCourses = Math.ceil(Math.random() * allCourses.length) + 1;
    for (let i = 0; i < noOfCourses; i++) {
      const courseId = Math.floor(Math.random() * courses.length - 1) + 1;
      const course = courses[courseId];
      fakeCourses.push(course._id);
    }

    const collegesName = [...new Set(colleges.map((c) => c.name))];
    let name = faker.lorem.word();
    while (collegesName.includes(name)) {
      name = faker.lorem.word();
    }

    const college = {
      name,
      yearFounded: `${getRandomValue(collegeOpeningYears)}`,
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      noOfStudents: Math.floor(Math.random() * 10000) + 1000000, // random number between [10000, 1000000]
      courses: fakeCourses,
    };

    colleges.push(college);
  }

  await College.insertMany(colleges);
};

/**
 * generate fake data for student schema
 */
const generateStudentsData = async () => {
  const students = [];
  const allColleges = await College.find().lean();

  for (let i = 0; i < 10000; i++) {
    const student = {
      name: faker.name.findName(),
      yearOfBatch: `${getRandomValue(studentJoiningYears)}`,
      college: getRandomValue(allColleges)._id,
      skills: generateSkills(),
    };

    students.push(student);
  }

  await Student.insertMany(students);
};

/**
 * generate fake data for entire database
 */
const generateData = async (req, res) => {
  await generateCourseData();
  await generateCollegesData();
  await generateStudentsData();

  res.send({ status: true });
};

export const generateDataRoutes = () => {
  const router = express.Router();
  router.get("/generate-data", generateData);

  return router;
};
