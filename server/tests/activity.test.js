const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
require('dotenv').config();

jest.setTimeout(10000); // Set the timeout to 10 seconds (or adjust as needed)

let server;

/* Connecting to the database before each test. */
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  server = app.listen(3000); // Start the server
});

/* Closing database connection and server after each test. */
afterAll(async () => {
  await mongoose.connection.close();
  server.close(); // Close the server
});

describe('GET /api/activities', () => {
  it('should get all the activities', async () => {
    const response = await request(app).get('/api/activities');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
