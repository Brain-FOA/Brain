/*
  Warnings:

  - A unique constraint covering the columns `[crp]` on the table `profissionais` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `profissionais_crp_key` ON `profissionais`(`crp`);
