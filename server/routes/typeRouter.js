import {Router} from "express";
import TypeController from "../controllers/TypeController.js";

const router = new Router()
router.get('/', TypeController.getAll)
router.post('/', TypeController.create)
router.put('/', TypeController.update)
router.delete('/', TypeController.delete)


export default router