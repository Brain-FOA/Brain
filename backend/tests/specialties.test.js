import { test, describe } from "poku";
import request from "supertest";
import assert from "node:assert";

import { app } from "../src/app.js";

import { mock_valid_login, mock_valid_login_admin, delete_mock, delete_mock_specialtie, mock_valid_specialty } from "./mocks/mocks.js";

describe('Testes para as rotas de /specialties', { icon: '🚀' }) 

test("Teste de falha para /specialties/register (sem token)", async () => {
    const res = await request(app).post("/specialties/register").send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de falha para /specialties/register (campos vazios)", async () => {
    let userData = await mock_valid_login_admin();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .post("/specialties/register")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.message, "Preencha o campo.");

    await delete_mock(userData.email);
});

test("Teste de sucesso para /specialties/register", async () => {
    let userData = await mock_valid_login_admin();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .post("/specialties/register")
        .set("Authorization", `Bearer ${token}`)
        .send({ nome: "teste" });

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.message, "Especialidade criada com sucesso.");

    await delete_mock(userData.email);
    await delete_mock_specialtie("teste")
});

test("Teste de falha para /specialties/view (sem token)", async () => {
    const res = await request(app).get("/specialties/view");

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /specialties/view", async () => {
    let userData = await mock_valid_login_admin();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .get("/specialties/view")
        .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.message, "Trazendo todas as especialidades.");

    await delete_mock(userData.email);
});

test("Teste de falha para /specialties/update/:id (sem token)", async () => {
    const res = await request(app).put("/specialties/update/1").send({});

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /specialties/update/:id", async () => {
    let userData = await mock_valid_login_admin();
    let specialtieData = await mock_valid_specialty();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .put(`/specialties/update/${specialtieData.id}`)
        .set("Authorization", `Bearer ${token}`)
        .send({ nome: "Especialidade Atualizada" });

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.message, "Especialidade editada com sucesso.");

    await delete_mock_specialtie("Especialidade Atualizada")
    await delete_mock(userData.email);
});

test("Teste de falha para /specialties/delete/:id (sem permissão)", async () => {
    let userData = await mock_valid_login();
    let specialtieData = await mock_valid_specialty();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
    .delete(`/specialties/delete/${specialtieData.id}`)
    .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado, área restrita para administradores.");

    await delete_mock_specialtie(specialtieData.nome)
    await delete_mock(userData.email);
});

test("Teste de sucesso para /specialties/delete/:id", async () => {
    let userData = await mock_valid_login_admin();
    let specialtieData = await mock_valid_specialty();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .delete(`/specialties/delete/${specialtieData.id}`)
        .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.message, "Especialidade excluida com sucesso.");

    // await delete_mock_specialtie(specialtieData.nome)
    await delete_mock(userData.email);
});

