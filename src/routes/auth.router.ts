import { Router } from "express"
import {
    userLogin,
    // userSignup,
    userLogOut,
} from "../controllers/auth.controller"
import { validate } from "../utils/validate"
// import { authValidate } from "../valdator/auth.validate"
// import { authenticateToken } from "../middlewares/auth.middleware"

const router = Router()

router.post("/login", userLogin)
//router.post("/signup", userSignup)
router.post("/logout", userLogOut)

export default router
