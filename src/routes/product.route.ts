import { Router } from "express"
import {
    getProductById,
    getAllProducts,
    postProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller"
import { authenticateToken, isAdmin } from "../middlewares/auth.middleware"
import { validate } from "../utils/validate"

const router = Router()

router.get("/:id", authenticateToken, getProductById)
router.get("/", authenticateToken, getAllProducts) // accessible by non admin user too
router.post("/", postProduct)
router.patch("/:id", authenticateToken, isAdmin, updateProduct)
router.delete("/:id", authenticateToken, isAdmin, deleteProduct)

export default router
