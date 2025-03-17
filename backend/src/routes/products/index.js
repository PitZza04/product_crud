import { Router } from "express";
import {
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
} from "./productController.js";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
