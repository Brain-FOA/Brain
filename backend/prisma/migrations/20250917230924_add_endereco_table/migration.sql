-- CreateTable
CREATE TABLE `enderecos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(9) NOT NULL,
    `cidade` VARCHAR(45) NOT NULL,
    `bairro` VARCHAR(45) NOT NULL,
    `numero` VARCHAR(10) NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `enderecos_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `enderecos` ADD CONSTRAINT `enderecos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
