import { test, describe } from "poku";
import request from "supertest";
import assert from "node:assert";

import { app } from "../src/app.js";

import { mock_valid_login_feedback, delete_mock_feedback, delete_mock, mock_valid_feedback, mock_valid_feedback_p } from "./mocks/mocks.js";

describe('Testes para as rotas de /feedbacks',{ icon: '🚀' }) 

test("Teste de falha para /feedbacks/viewAll (sem token)", async () => {
    const res = await request(app).get("/feedbacks/viewAll")

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /feedbacks/viewAll", async () => {
    const userData = await mock_valid_login_feedback()

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
    .get("/feedbacks/viewAll")
    .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Trazendo todos os feedbacks.");

    await delete_mock(userData.email)
});

test("Teste de falha para /feedbacks/viewUser (sem token)", async () => {
    const res = await request(app).get("/feedbacks/viewUser")

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /feedbacks/viewUser", async () => {
    const userData = await mock_valid_login_feedback()

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
    .get("/feedbacks/viewUser")
    .set("Authorization", `Bearer ${token}`)

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Trazendo todos os feedbacks do usuário.");

    await delete_mock(userData.email)
});

test("Teste de falha para /feedbacks/viewUser (campos vazios)", async () => {
    const userData = await mock_valid_login_feedback()

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
    .post("/feedbacks/register")
    .set("Authorization", `Bearer ${token}`)
    .send({})

    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, true);
    assert.strictEqual(res.body.message, "Preencha todos os campos.");

    await delete_mock(userData.email)
});

test("Teste de sucesso para /feedbacks/register", async () => {
    const userData = await mock_valid_login_feedback();

    // faz login e pega o token no corpo da resposta
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    const res = await request(app)
        .post("/feedbacks/register")
        .set("Authorization", `Bearer ${token}`)
        .send(mock_valid_feedback); 

    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Feedback registrado com sucesso.");

    const feedbackId = res.body.data.id;

    await delete_mock_feedback(feedbackId);
    await delete_mock(userData.email);
});

test("Teste de falha para /feedbacks/delete/:id (sem token)", async () => {
    const res = await request(app).delete("/feedbacks/delete/1")

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /feedbacks/delete/:id", async () => {
    // Cria usuário e captura o ID gerado
    const userData = await mock_valid_login_feedback();

    // Faz login e pega o token
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    // Cria um feedback para esse usuário
    const feedbackData = await mock_valid_feedback_p(userData.id);
    const feedbackId = feedbackData.id;

    const res = await request(app)
        .delete(`/feedbacks/delete/${feedbackId}`)
        .set("Authorization", `Bearer ${token}`);

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Feedback excluido com sucesso.");

    await delete_mock(userData.email);
});

test("Teste de falha para /feedbacks/update/:id (sem token)", async () => {
    const res = await request(app).patch("/feedbacks/update/1")

    assert.strictEqual(res.status, 401);
    assert.strictEqual(res.body.message, "Acesso negado!");
});

test("Teste de sucesso para /feedbacks/update/:id", async () => {
    // Cria usuário e captura o ID gerado
    const userData = await mock_valid_login_feedback();

    // Faz login e pega o token
    const login = await request(app).post("/auth/login").send(userData);
    const { token } = login.body; 

    // Cria um feedback para esse usuário
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

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.error, false);
    assert.strictEqual(res.body.message, "Feedback atualizado com sucesso.");
    assert.strictEqual(res.body.data.titulo, updatedFeedback.titulo);
    assert.strictEqual(res.body.data.conteudo, updatedFeedback.conteudo);

    await delete_mock_feedback(feedbackId);
    await delete_mock(userData.email);
});
