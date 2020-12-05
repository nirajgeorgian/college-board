import express from "express";
import { generateDataRoutes } from "./generate-data";
import { generateCollegeRoutes } from "./college";

function getRoutes() {
  const router = express.Router();

  router.use("/data", generateDataRoutes());
  router.use("/college", generateCollegeRoutes());

  return router;
}

export { getRoutes };
