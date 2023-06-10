const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
require('dotenv').config();

jest.setTimeout(10000); // Set the timeout to 10 seconds (or adjust as needed)

/* Connecting to the database before each test. */
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterAll(async () => {
  await mongoose.connection.close();
});

describe('GET /api/activities', () => {
  it('should get all the activities', async () => {
    const response = await request(app).get('/api/activities');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
