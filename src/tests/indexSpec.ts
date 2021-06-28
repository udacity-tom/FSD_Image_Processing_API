import supertest from "supertest";
import { isMainThread } from "worker_threads";
import app from  '../index';

const request = supertest(app);

describe('Tests endpoint', () => {
    it('checks response from the endpoint', async (done) => {
        const response = await request.get('/convertImage');
        expect(response.status).toBe(200);
        done();
    })
});