import express from "express";
import {
  getAllColleges,
  getSingleCollege,
  attachCollege,
  getRecommendedCollege,
} from "../controller/college";

export const generateCollegeRoutes = () => {
  const router = express.Router();
  router.get("/", getAllColleges);
  router.get("/:id", attachCollege, getSingleCollege);
  router.get("/recommendation/:id", attachCollege, getRecommendedCollege);

  return router;
};
