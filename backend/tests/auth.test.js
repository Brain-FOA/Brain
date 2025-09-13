import { test, describe } from "poku";
import request from "supertest";
import assert from "node:assert";

import { app } from "../src/app.js";

import { mock_invalid_login, mock_valid_login, delete_mock_login, mock_invalid_register, mock_valid_register } from "./mocks/mocks_auth.js";

let userData;

describe('Testes para as rotas de /auth',{ icon: '🚀' }) 

// login
test("Teste de falha para /auth/login (campos vazios)", async () => {
    const res = await request(app).post("/auth/login").send({});

    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.body.message, "Preencha todos os campos.");
});

test("Teste de falha para /auth/login (usuário inválido)", async () => {
    const res = await request(app).post("/auth/login").send(mock_invalid_login);
        
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.body.message, "O email não está cadastrado.");
});

test("Teste de sucesso para /auth/login", async () => {
    userData = await mock_valid_login();

    const res = await request(app).post("/auth/login").send(userData);
        
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Login feito com sucesso.");

    await delete_mock_login(userData.email);
});

// register
test("Teste de falha para /auth/register (campos vazios)", async () => {
    const res = await request(app).post("/auth/register").send({});

    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.body.message, "Preencha todos os campos.");
});

test("Teste de falha para /auth/register (usuário inválido)", async () => {
    const res = await request(app).post("/auth/register").send(mock_invalid_register);
        
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.body.message, "As senhas não coincidem.");
});

test("Teste de sucesso para /auth/register", async () => {
    const res = await request(app).post("/auth/register").send(mock_valid_register);
        
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Registro feito com sucesso.");

    await delete_mock_login(mock_valid_register.email);
});



