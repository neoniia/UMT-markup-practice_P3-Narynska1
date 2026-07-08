import Joi from 'joi';

export const getProductsQuerySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(20).default(8),
  search: Joi.string().allow('').default(''),
  category: Joi.string().valid('', 'romantic', 'spring', 'premium', 'gift').default(''),
  sort: Joi.string().valid('popular', 'price-asc', 'price-desc', 'name-asc').default('popular'),
});
