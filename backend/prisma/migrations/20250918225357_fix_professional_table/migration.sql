/*
  Warnings:

  - A unique constraint covering the columns `[telefone]` on the table `profissionais` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `profissionais` ADD COLUMN `aprovacao` BOOLEAN NULL;

-- CreateIndex
CREATE UNIQUE INDEX `profissionais_telefone_key` ON `profissionais`(`telefone`);
