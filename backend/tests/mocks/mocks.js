import { PrismaClient } from '../../src/generated/prisma/client.js';
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

// mocks para /auth
export let mock_invalid_login = { email: `teste_${Date.now()}@gmail.com`, senha: "123456" }

export const mock_invalid_register = {
    nome: "Usuário Teste",
    email: `teste_${Date.now()}@gmail.com`,
    senha: "123456",
    confirmaSenha: "654321"
}

export const mock_valid_register = {
    nome: "Usuário Teste",
    email: `teste_${Date.now()}@gmail.com`,
    senha: "123456",
    confirmaSenha: "123456"
}

export async function mock_valid_login(email = null) {
    const senha = "123456";
    const hashedPassword = await bcrypt.hash(senha, 10);
    const userEmail = email || `teste_${Date.now()}@teste.com`;

    let user = await prisma.usuario.create({
        data: {
        email: userEmail,
        senha: hashedPassword,
        nome: "Usuário Teste",
        acesso: "user"
        }
    });

    return { email: user.email, senha }
}

export async function delete_mock_login(email) {
    await prisma.usuario.delete({ where: { email } });
}

// mocks para /user