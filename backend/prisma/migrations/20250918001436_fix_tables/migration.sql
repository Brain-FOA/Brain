-- DropForeignKey
ALTER TABLE `profissionais` DROP FOREIGN KEY `profissionais_especialidadeId_fkey`;

-- DropIndex
DROP INDEX `profissionais_especialidadeId_key` ON `profissionais`;

-- AddForeignKey
ALTER TABLE `profissionais` ADD CONSTRAINT `profissionais_especialidadeId_fkey` FOREIGN KEY (`especialidadeId`) REFERENCES `especialidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
