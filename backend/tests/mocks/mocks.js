import { PrismaClient } from '../../src/generated/prisma/client.js';
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

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

export async function delete_mock(email) {
    await prisma.usuario.delete({ where: { email } });
}

export async function mock_valid_login_admin(email = null) {
    const senha = "123456";
    const hashedPassword = await bcrypt.hash(senha, 10);
    const userEmail = email || `teste_${Date.now()}@teste.com`;

    let user = await prisma.usuario.create({
        data: {
        email: userEmail,
        senha: hashedPassword,
        nome: "Usuário Teste",
        acesso: "admin"
        }
    });

    return { email: user.email, senha }
}

export async function mock_valid_specialty(name = null) {
    const uniqueName = name || `especialidade_${Date.now()}`;

    const specialty = await prisma.especialidade.create({
        data: {
        nome: uniqueName,
        },
    });

    return { id: specialty.id, nome: specialty.nome };
}

export async function delete_mock_specialtie(nome) {
    await prisma.especialidade.delete({ where: { nome } });
}
