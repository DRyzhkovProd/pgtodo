import {Router} from "express";
import ProductController from "../controllers/ProductController.js";

const router = new Router()

router.post('/', ProductController.create)
router.get('/', ProductController.getAll)
router.get('/:id')
router.delete('/', ProductController.delete)


export default router