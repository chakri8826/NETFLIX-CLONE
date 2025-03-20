import express from "express";
import { getSimilarTvs, getTrendingTv, getTvDetails, getTvsByCategories, getTvTrailers } from "../controllers/tv.controllers.js";


const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details",getTvDetails);
router.get("/:id/similar",getSimilarTvs);
router.get("/:category",getTvsByCategories);



export default router;