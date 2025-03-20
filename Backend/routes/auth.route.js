import express from 'express'; // Import express

import { protectRoute } from "../middleware/protectRoute.js";
import {
  signup,
  login,
  logout,
  authCheck,
} from "../controllers/auth.controllers.js";

const router = express.Router();

// Signup Route (post since we're creating a new user)
router.post("/signup", signup);

router.post("/login",  login);

// Logout Route (post, depending on session management)
router.post("/logout", logout);


router.get("/authCheck", protectRoute,authCheck);

export default router;
