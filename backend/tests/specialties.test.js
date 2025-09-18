import { test, describe, assert } from "poku";
import request from "supertest";

import { app } from "../src/app.js";

import { mock_valid_login, mock_valid_login_admin, delete_mock, delete_mock_specialtie, mock_valid_specialty } from "./mocks/mocks.js";

describe('Testes para as rotas de /specialties', { icon: '🚀' }) 

// register
test("Teste de falha para /specialties/register (sem token)", async () => {
    const res = await request(app).post("/specialties/register").send({});

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

test("Teste de falha para /specialties/register (campos vazios)", async () => {
    let userData = await mock_valid_login_admin();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .post("/specialties/register")
        .set("Authorization", `Bearer ${token}`)
        .send({});

    assert.strictEqual(res.status, 400, "status deveria ser 400");
    assert.strictEqual(res.body.error, true, "error deveria ser true");
    assert.strictEqual(res.body.message, "Preencha o campo.", "mensagem correta");

    await delete_mock(userData.email);
});

// sucesso register
test("Teste de sucesso para /specialties/register", async () => {
    let userData = await mock_valid_login_admin();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .post("/specialties/register")
        .set("Authorization", `Bearer ${token}`)
        .send({ nome: "teste_23232323232" });

    assert.strictEqual(res.status, 201, "status deveria ser 201");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Especialidade criada com sucesso.", "mensagem correta");

    await delete_mock(userData.email);
    await delete_mock_specialtie("teste_23232323232")
});

// sucesso view
test("Teste de sucesso para /specialties/view", async () => {
    let userData = await mock_valid_login_admin();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .get("/specialties/view")
        .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Trazendo todas as especialidades.", "mensagem correta");

    await delete_mock(userData.email);
});

// update sem token
test("Teste de falha para /specialties/update/:id (sem token)", async () => {
    const res = await request(app).put("/specialties/update/1").send({});

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

// update sucesso
test("Teste de sucesso para /specialties/update/:id", async () => {
    let userData = await mock_valid_login_admin();
    let specialtieData = await mock_valid_specialty();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const updatedName = "Especialidade Atualizada";

    const res = await request(app)
        .put(`/specialties/update/${specialtieData.id}`)
        .set("Authorization", `Bearer ${token}`)
        .send({ nome: updatedName });
        
    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Especialidade editada com sucesso.", "mensagem correta");
    assert.strictEqual(res.body.data.nome, updatedName, "nome atualizado corretamente");

    await delete_mock_specialtie("Especialidade Atualizada")
    await delete_mock(userData.email);
});

// delete sem permissão
test("Teste de falha para /specialties/delete/:id (sem permissão)", async () => {
    let userData = await mock_valid_login();
    let specialtieData = await mock_valid_specialty();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
    .delete(`/specialties/delete/${specialtieData.id}`)
    .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado, área restrita para administradores.", "mensagem correta");

    await delete_mock_specialtie(specialtieData.nome)
    await delete_mock(userData.email);
});

// delete sucesso
test("Teste de sucesso para /specialties/delete/:id", async () => {
    let userData = await mock_valid_login_admin();
    let specialtieData = await mock_valid_specialty();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .delete(`/specialties/delete/${specialtieData.id}`)
        .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Especialidade excluida com sucesso.", "mensagem correta");

    await delete_mock(userData.email);
});

