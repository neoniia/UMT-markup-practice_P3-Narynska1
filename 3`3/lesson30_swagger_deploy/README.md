# Заняття 30 — Swagger, ревʼю коду та підготовка до деплою

## Що реалізовано

- Backend на Express.
- API для продуктів та замовлень.
- Joi-валідація request body та query params.
- Swagger UI.
- OpenAPI-документація у `backend/src/docs/swagger.yaml`.
- `components.schemas` для Product, Order, Error та пагінації.
- Опис requestBody і responses.
- Query-параметри для пагінації, фільтрації та сортування.
- Demo auth endpoints.
- `.env.example`.
- Чекліст ревʼю коду.
- Інструкція деплою на Render.

## Основні файли для перевірки

- `backend/src/docs/swagger.yaml`
- `backend/src/routes/products.js`
- `backend/src/routes/orders.js`
- `backend/src/routes/auth.js`
- `backend/src/validations/products.js`
- `backend/src/validations/orders.js`
- `backend/src/app.js`
- `backend/package.json`
- `REVIEW_CHECKLIST.md`
- `DEPLOY_RENDER.md`

## Як запустити

```bash
cd backend
npm install
npm run dev
```

## Swagger

Після запуску сервера відкрити:

```text
http://localhost:3000/api-docs
```

## Як перевірити

1. Відкрити Swagger UI.
2. Перевірити `GET /api/products`.
3. Перевірити query-параметри `page`, `limit`, `search`, `category`, `sort`.
4. Перевірити `GET /api/products/{productId}`.
5. Перевірити `POST /api/orders` через Try it out.
6. Звірити схеми у `components.schemas` з Joi-валідаціями.
7. Переглянути `REVIEW_CHECKLIST.md`.
