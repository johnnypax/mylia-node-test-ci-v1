const request = require('supertest');
const { app, close } = require('./index');

describe("Test API endpoints", () => {
    it("GET / should return Hello World!", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Hello World!' });
    })

    it("GET /client should return Hello Client!", async () => {
        const res = await request(app).get("/client");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Hello Client!' });
    })

    it("GET /server should return Hello Client!", async () => {
        const res = await request(app).get("/server");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Hello Server!' });
    })

    afterAll(done => {
        close();
        done();
    });
})