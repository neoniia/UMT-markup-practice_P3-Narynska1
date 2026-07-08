# Деплой backend на Render

1. Завантаж проєкт у GitHub.
2. Відкрий Render.
3. Натисни New → Web Service.
4. Підключи GitHub repository.
5. Root Directory вкажи:

```text
backend
```

6. Build Command:

```bash
npm install
```

7. Start Command:

```bash
npm start
```

8. Environment Variables:

```env
PORT=3000
CORS_ORIGIN=https://your-frontend-domain.com
NODE_ENV=production
JWT_SECRET=your_secret_value
```

9. Після деплою відкрий:

```text
https://your-service.onrender.com/api-docs
```

10. У файлі `backend/src/docs/swagger.yaml` заміни:

```text
https://your-flora-api.onrender.com
```

на реальне посилання Render.
