import { test, describe } from "poku";
import request from "supertest";
import assert from "node:assert";

import { app } from "../src/app.js";

import { mock_valid_login, delete_mock } from "./mocks/mocks.js";

describe('Testes para as rotas de /specialties',{ icon: '🚀' }) 