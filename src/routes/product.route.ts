import { Router } from "express"
import {
    getProductById,
    getAllProducts,
    postProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller"
import { authenticateToken } from "../middlewares/auth.middleware"

const router = Router()

router.get("/:id", authenticateToken, getProductById)
router.get("/", authenticateToken, getAllProducts) // accessible by non admin user too
router.post("/", postProduct)
router.patch("/:id", authenticateToken, updateProduct)
router.delete("/:id", authenticateToken, deleteProduct)

export default router
