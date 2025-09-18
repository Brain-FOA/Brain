import { test, describe, assert } from "poku";
import request from "supertest";

import { app } from "../src/app.js";

import { mock_valid_login_feedback, delete_mock_feedback, delete_mock, mock_valid_feedback, mock_valid_feedback_p } from "./mocks/mocks.js";

describe('Testes para as rotas de /feedbacks',{ icon: '🚀' }) 

// viewAll
test("Teste de falha para /feedbacks/viewAll (sem token)", async () => {
    const res = await request(app).get("/feedbacks/viewAll")

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

test("Teste de sucesso para /feedbacks/viewAll", async () => {
    const userData = await mock_valid_login_feedback()

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .get("/feedbacks/viewAll")
        .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Trazendo todos os feedbacks.", "mensagem correta");

    await delete_mock(userData.email)
});

// viewUser
test("Teste de falha para /feedbacks/viewUser (sem token)", async () => {
    const res = await request(app).get("/feedbacks/viewUser")

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

test("Teste de sucesso para /feedbacks/viewUser", async () => {
    const userData = await mock_valid_login_feedback()

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .get("/feedbacks/viewUser")
        .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Trazendo todos os feedbacks do usuário.", "mensagem correta");

    await delete_mock(userData.email)
});

// register
test("Teste de falha para /feedbacks/viewUser (campos vazios)", async () => {
    const userData = await mock_valid_login_feedback()

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .post("/feedbacks/register")
        .set("Authorization", `Bearer ${token}`)
        .send({})

    assert.strictEqual(res.status, 400, "status deveria ser 400");
    assert.strictEqual(res.body.error, true, "error deveria ser true");
    assert.strictEqual(res.body.message, "Preencha todos os campos.", "mensagem correta");

    await delete_mock(userData.email)
});

test("Teste de sucesso para /feedbacks/register", async () => {
    const userData = await mock_valid_login_feedback();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .post("/feedbacks/register")
        .set("Authorization", `Bearer ${token}`)
        .send(mock_valid_feedback); 

    assert.strictEqual(res.status, 201, "status deveria ser 201");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Feedback registrado com sucesso.", "mensagem correta");

    const feedbackId = res.body.data.id;

    await delete_mock_feedback(feedbackId);
    await delete_mock(userData.email);
});

// delete
test("Teste de falha para /feedbacks/delete/:id (sem token)", async () => {
    const res = await request(app).delete("/feedbacks/delete/1")

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

test("Teste de sucesso para /feedbacks/delete/:id", async () => {
    const userData = await mock_valid_login_feedback();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const feedbackData = await mock_valid_feedback_p(userData.id);
    const feedbackId = feedbackData.id;

    const res = await request(app)
        .delete(`/feedbacks/delete/${feedbackId}`)
        .set("Authorization", `Bearer ${token}`);

    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Feedback excluido com sucesso.", "mensagem correta");

    await delete_mock(userData.email);
});

// update
test("Teste de falha para /feedbacks/update/:id (sem token)", async () => {
    const res = await request(app).patch("/feedbacks/update/1")

    assert.strictEqual(res.status, 401, "status deveria ser 401");
    assert.strictEqual(res.body.message, "Acesso negado!", "mensagem correta");
});

test("Teste de sucesso para /feedbacks/update/:id", async () => {
    const userData = await mock_valid_login_feedback();

    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const feedbackData = await mock_valid_feedback_p(userData.id);
    const feedbackId = feedbackData.id;

    const updatedFeedback = {
        titulo: "Feedback Atualizado",
        conteudo: "Conteúdo atualizado do feedback."
    };

    const res = await request(app)
        .patch(`/feedbacks/update/${feedbackId}`)
        .set("Authorization", `Bearer ${token}`)
        .send(updatedFeedback);

    assert.strictEqual(res.status, 200, "status deveria ser 200");
    assert.strictEqual(res.body.error, false, "error deveria ser false");
    assert.strictEqual(res.body.message, "Feedback atualizado com sucesso.", "mensagem correta");
    assert.strictEqual(res.body.data.titulo, updatedFeedback.titulo, "titulo foi atualizado corretamente");
    assert.strictEqual(res.body.data.conteudo, updatedFeedback.conteudo, "conteudo foi atualizado corretamente");

    await delete_mock_feedback(feedbackId);
    await delete_mock(userData.email);
});