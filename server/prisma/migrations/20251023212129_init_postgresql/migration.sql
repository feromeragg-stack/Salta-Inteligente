-- CreateEnum
CREATE TYPE "Categoria" AS ENUM ('COMPOSTA', 'RECICLAJE', 'HUERTA');

-- CreateTable
CREATE TABLE "Punto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "latitud" DOUBLE PRECISION NOT NULL,
    "longitud" DOUBLE PRECISION NOT NULL,
    "categoria" "Categoria" NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Punto_pkey" PRIMARY KEY ("id")
);
