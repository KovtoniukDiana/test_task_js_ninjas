Технологічний стек проєкту:
-backend:Node.js, Express
-frontend: React

Запуск проєкту:

*Backend (/server): 
-встановлення залежностей (npm install)
-створення файлу .env з необхідними змінними. Змінні з мого проєкту для підключення до supabase:
    
      DATABASE_URL="postgresql://postgres.ooxouhihildkhnsiwcdd:AdminDBPassw@aws-1-eu-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
      
      DIRECT_URL="postgresql://postgres.ooxouhihildkhnsiwcdd:AdminDBPassw@aws-1-eu-west-2.pooler.supabase.com:5432/postgres"
      
      SUPABASE_URL = "https://ooxouhihildkhnsiwcdd.supabase.co"
      
      SUPABASE_SERVICE_ROLE_KEY = "sb_secret_QNpYJ7kMRLr_53xNf84-EQ_Jk6NnB38"
      
-команда запуску бекенду: npm run start

*Frontend (/client):
-встановлення залежностей (npm install)
-команда запуску фронтенду: npm run start

Для збереження зображень було використано Supabase Storage, для обробки файлів - Multer. Не завантажуйте фото, які важать більше ніж 5МБ.
