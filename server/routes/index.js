import {Router} from "express";

const router = new Router()

router.use('/user')
router.use('/product')
router.use('/type')
router.use('/basket')

export default router