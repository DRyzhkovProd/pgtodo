import {Router} from "express";

import userRouter from "./userRouter.js";
import typeRouter from "./typeRouter.js";
import productRouter from "./productRouter.js";
const router = new Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)

export default router