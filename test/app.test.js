const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should respond with welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Welcome to the Currency Converter API!');
    });
});

describe('GET /api/convert', () => {
  it('should respond with conversion working message', async () => {
    const res = await request(app).get('/api/convert');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Currency conversion works!');
  });
});