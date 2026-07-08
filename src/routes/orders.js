import express from 'express';
import { validateBody } from '../middlewares/validate.js';
import { createOrderSchema } from '../validations/orders.js';

const router = express.Router();
const orders = [];

router.post('/', validateBody(createOrderSchema), (req, res) => {
  const order = {
    id: `order_${Date.now()}`,
    status: 'created',
    createdAt: new Date().toISOString(),
    ...req.body,
  };

  orders.push(order);
  res.status(201).json(order);
});

router.get('/', (req, res) => {
  res.json({ items: orders, totalItems: orders.length });
});

export default router;
