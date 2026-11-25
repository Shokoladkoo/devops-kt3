const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  test('GET / должен возвращать строку "КТ3 App"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('КТ3 App');
  });

  test('GET /health должен возвращать JSON { "status": "ok" }', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});