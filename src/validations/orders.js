import Joi from 'joi';

export const createOrderSchema = Joi.object({
  productId: Joi.string().required(),
  productName: Joi.string().allow(''),
  quantity: Joi.number().integer().min(1).default(1),
  name: Joi.string().min(2).max(60).required(),
  phone: Joi.string().min(6).max(30).required(),
  address: Joi.string().min(3).max(160).required(),
  message: Joi.string().allow('').max(600),
});
