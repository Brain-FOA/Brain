import { test, describe, assert } from "poku";
import autocannon from "autocannon";

import { app } from "../src/app.js";
import { mock_valid_login, delete_mock, mock_valid_register } from "./mocks/mocks.js";

describe('Testes de stress para rotas mais requisitadas do app',{ icon: '🚀' })

test("Stress test para /auth/login", async () => {
    const userData = await mock_valid_login();

    // Inicia o server temporariamente
    const server = app.listen(3001);

    const result = await new Promise((resolve, reject) => {
    const instance = autocannon({
        url: 'http://localhost:3001/auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
        connections: 20, 
        duration: 5    
    }, (err, res) => {
        if (err) return reject(err);
        resolve(res);
    });

    autocannon.track(instance, { renderProgressBar: true });
    });

    assert(result.requests.average > 0, "requests feitas");

    server.close();
    await delete_mock(userData.email);
})

test("Stress test para /auth/register", async () => {
    const server = app.listen(3002);

    const result = await new Promise((resolve, reject) => {
    const instance = autocannon({
        url: 'http://localhost:3002/auth/register',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mock_valid_register),
        connections: 20,
        duration: 5
    }, (err, res) => {
        if (err) return reject(err);
        resolve(res);
    });

    autocannon.track(instance, { renderProgressBar: true });
    });

    console.log("Resultado do register:", result);

    assert(result.requests.average > 0, "requests feitas");

    server.close();
    await delete_mock(mock_valid_register.email);
});



