import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  res.status(201).json({
    user: {
      id: 'demo-user',
      name: req.body?.name || 'Demo User',
      email: req.body?.email || 'demo@flora.com',
    },
    token: 'demo-jwt-token',
  });
});

router.post('/login', (req, res) => {
  res.json({
    user: {
      id: 'demo-user',
      email: req.body?.email || 'demo@flora.com',
    },
    token: 'demo-jwt-token',
  });
});

export default router;
