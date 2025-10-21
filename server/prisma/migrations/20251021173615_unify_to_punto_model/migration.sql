/*
  Warnings:

  - You are about to drop the `Feria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PuntoInteres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Feria";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PuntoInteres";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Punto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "latitud" REAL NOT NULL,
    "longitud" REAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
