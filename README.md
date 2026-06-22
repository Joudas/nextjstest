# Development
Pasos para levantar la app en desarrollo
1. docker compose up -d # Desde la ruta base

2. Prisma Comand
pnpx prisma init
pnpx prisma migrate dev # Migrar la base de datos de schema.prisma
pnpx prisma generate