import { test, describe, assert } from "poku";
import request from "supertest";

import { app } from "../src/app.js";

import { mock_invalid_login, mock_valid_login, delete_mock, mock_invalid_register, mock_valid_register } from "./mocks/mocks.js";

describe('Testes para as rotas de /user',{ icon: '🚀' }) 

// update
test("Teste de falha para /users/update (campos vazios)", async () => {
    let userData = await mock_valid_login();

    const login = await request(app).post("/auth/login").send(userData);
    const token = login.body.token; 

    const res = await request(app)
        .patch("/users/update")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.status, 400, "status deveria ser 400");
    assert.strictEqual(res.body.error, true, "error deveria ser true");
    assert.strictEqual(res.body.message, "Preencha todos os campos obrigatórios.", "mensagem correta");

    await delete_mock(userData.email);
});

test("Teste de falha para /users/update (sem token)", async () => {
    const res = await request(app)
        .patch("/users/update")
        .send({});

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

test("Teste de sucesso para /users/update", async () => {
    let userData = await mock_valid_login();

    const login = await request(app).post("/auth/login").send(userData);
    const { token, data } = login.body; 

    const res = await request(app)
        .patch("/users/update")
        .set("Authorization", `Bearer ${token}`)
        .send({...data, nome: "testeUpdate", senha: userData.senha });

    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.message, "Conta editada com sucesso.", "mensagem correta");

    await delete_mock(userData.email);
});

// delete
test("Teste de falha para /users/delete (campos vazios)", async () => {
    let userData = await mock_valid_login();

    const login = await request(app).post("/auth/login").send(userData);
    const token = login.body.token; 

    const res = await request(app)
        .patch("/users/delete")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Permissão negada (confira o email).", "mensagem correta");

    await delete_mock(userData.email);
});

test("Teste de falha para /users/delete (sem token)", async () => {
    const res = await request(app)
        .patch("/users/delete")
        .send({});

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

test("Teste de sucesso para /users/delete", async () => {
    let userData = await mock_valid_login();

    const login = await request(app).post("/auth/login").send(userData);
    const { token, data } = login.body; 

    const res = await request(app)
        .patch("/users/delete")
        .set("Authorization", `Bearer ${token}`)
        .send({...data, senha: userData.senha });

    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.message, "Conta excluida com sucesso.", "mensagem correta");

    await delete_mock(userData.email);
});