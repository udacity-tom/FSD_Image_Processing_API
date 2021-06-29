import supertest from "supertest";
import { isMainThread } from "worker_threads";
import app from  '../index';

const request = supertest(app);

describe('Tests endpoint is responsive', () => {
    it('checks response from the endpoint', async (done) => {
        const response = await request.get('/convertImage');
        expect(response.status).toBe(200);
        done();
    });
describe('Tests current setup response of endpoint', () => {
    it('checks response is the current text', async (done) => {
        const response = await request.get('/convertImage');
        // console.log('response',response);
        expect(response.text).toBe('Request received');
        done();
    });
})


});