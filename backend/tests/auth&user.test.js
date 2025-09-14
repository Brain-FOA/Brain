import { test, describe } from "poku";
import request from "supertest";
import assert from "node:assert";

import { app } from "../src/app.js";

import { mock_invalid_login, mock_valid_login, delete_mock, mock_invalid_register, mock_valid_register } from "./mocks/mocks.js";

describe('Testes para as rotas de /user e /auth',{ icon: '🚀' }) 

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
    let userData = await mock_valid_login();

    const res = await request(app).post("/auth/login").send(userData);
        
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Login feito com sucesso.");

    await delete_mock(userData.email);
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

    await delete_mock(mock_valid_register.email);
});

// update
test("Teste de falha para /users/update (campos vazios)", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const token = login.body.token; 

    const res = await request(app)
        .patch("/users/update")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.body.message, "Preencha todos os campos obrigatórios.");

    await delete_mock(userData.email);
});

test("Teste de falha para /users/update (sem token)", async () => {
    const res = await request(app)
        .patch("/users/update")
        .send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /users/update", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token, data } = login.body; 

    const res = await request(app)
        .patch("/users/update")
        .set("Authorization", `Bearer ${token}`)
        .send({...data, nome: "testeUpdate", senha: userData.senha });

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.message, "Conta editada com sucesso.");

    await delete_mock(userData.email);
});

// delete
test("Teste de falha para /users/delete (campos vazios)", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const token = login.body.token; 

    const res = await request(app)
        .patch("/users/delete")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Permissão negada (confira o email).");

    await delete_mock(userData.email);
});

test("Teste de falha para /users/delete (sem token)", async () => {
    const res = await request(app)
        .patch("/users/delete")
        .send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /users/delete", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token, data } = login.body; 

    const res = await request(app)
        .patch("/users/delete")
        .set("Authorization", `Bearer ${token}`)
        .send({...data, senha: userData.senha });

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.message, "Conta excluida com sucesso.");

    await delete_mock(userData.email);
});