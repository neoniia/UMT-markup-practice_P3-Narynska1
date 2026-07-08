import express from 'express';
import { products } from '../data/products.js';
import { validateQuery } from '../middlewares/validate.js';
import { getProductsQuerySchema } from '../validations/products.js';

const router = express.Router();

function applyFilters(items, { search, category }) {
  const normalizedSearch = String(search || '').trim().toLowerCase();

  return items.filter(item => {
    const matchesSearch = !normalizedSearch || `${item.name} ${item.description}`.toLowerCase().includes(normalizedSearch);
    const matchesCategory = !category || item.category === category;
    return matchesSearch && matchesCategory;
  });
}

function applySort(items, sort) {
  const sorted = [...items];

  switch (sort) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      sorted.sort((a, b) => b.popular - a.popular);
  }

  return sorted;
}

router.get('/', validateQuery(getProductsQuerySchema), (req, res) => {
  const { page, limit, search, category, sort } = req.query;
  const filtered = applyFilters(products, { search, category });
  const sorted = applySort(filtered, sort);
  const totalItems = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * limit;

  res.json({
    items: sorted.slice(start, start + limit),
    totalItems,
    totalPages,
    currentPage,
  });
});

router.get('/:productId', (req, res) => {
  const product = products.find(item => item.id === req.params.productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

export default router;
