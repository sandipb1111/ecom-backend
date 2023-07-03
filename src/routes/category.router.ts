import { Router } from "express"
import { authenticateToken, isAdmin } from "../middlewares/auth.middleware"
import {
    postCategory,
    updateCategory,
    getAllCategory,
    getCategory,
    deleteCategory,
} from "../controllers/category.controller"

const router = Router()

//router.get("/", authenticateToken, getCategory)
router.get("/", authenticateToken, getAllCategory) // accessible by non admin user too
router.post("/", authenticateToken, isAdmin, postCategory)
router.patch("/:id", authenticateToken, isAdmin, updateCategory)
router.delete("/:id", authenticateToken, isAdmin, deleteCategory)

export default router
