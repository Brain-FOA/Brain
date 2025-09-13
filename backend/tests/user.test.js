import { test, describe } from "poku";
import request from "supertest";
import assert from "node:assert";

import { app } from "../src/app.js";

import { mock_valid_login, delete_mock } from "./mocks/mocks.js";

describe('Testes para as rotas de /user',{ icon: '🚀' }) 

// update
test("Teste de falha para /user/update (campos vazios)", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const token = login.body.token; 

    const res = await request(app)
        .patch("/user/update")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.body.message, "Preencha todos os campos obrigatórios.");

    await delete_mock(userData.email);
});

test("Teste de falha para /user/update (sem token)", async () => {
    const res = await request(app)
        .patch("/user/update")
        .send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /user/update", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token, data } = login.body; 

    const res = await request(app)
        .patch("/user/update")
        .set("Authorization", `Bearer ${token}`)
        .send({...data, nome: "testeUpdate", senha: userData.senha });

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.message, "Conta editada com sucesso.");

    await delete_mock(userData.email);
});

// delete
test("Teste de falha para /user/delete (campos vazios)", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const token = login.body.token; 

    const res = await request(app)
        .patch("/user/delete")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Permissão negada (confira o email).");

    await delete_mock(userData.email);
});

test("Teste de falha para /user/delete (sem token)", async () => {
    const res = await request(app)
        .patch("/user/delete")
        .send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /user/delete", async () => {
    let userData = await mock_valid_login();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token, data } = login.body; 

    const res = await request(app)
        .patch("/user/delete")
        .set("Authorization", `Bearer ${token}`)
        .send({...data, senha: userData.senha });

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.message, "Conta excluida com sucesso.");

    await delete_mock(userData.email);
});