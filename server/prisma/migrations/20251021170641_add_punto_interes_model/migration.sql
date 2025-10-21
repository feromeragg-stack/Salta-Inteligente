-- CreateTable
CREATE TABLE "PuntoInteres" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "latitud" REAL NOT NULL,
    "longitud" REAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
