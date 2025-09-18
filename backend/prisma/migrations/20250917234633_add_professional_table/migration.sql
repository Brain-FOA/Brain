-- CreateTable
CREATE TABLE `profissionais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `telefone` VARCHAR(20) NOT NULL,
    `crp` VARCHAR(20) NOT NULL,
    `descricao` VARCHAR(400) NOT NULL,
    `cpf` VARCHAR(14) NOT NULL,
    `especialidadeId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `profissionais_cpf_key`(`cpf`),
    UNIQUE INDEX `profissionais_especialidadeId_key`(`especialidadeId`),
    UNIQUE INDEX `profissionais_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profissionais` ADD CONSTRAINT `profissionais_especialidadeId_fkey` FOREIGN KEY (`especialidadeId`) REFERENCES `especialidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profissionais` ADD CONSTRAINT `profissionais_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
