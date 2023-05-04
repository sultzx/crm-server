import express from 'express'

import * as controller from '../controller/order.controller.js'
import checkAuth from '../middleware/checkAuth.js'

const orderRouter = express.Router()

orderRouter.post('/', checkAuth, controller.create)
orderRouter.get('/all', checkAuth, controller.all)

export default orderRouter