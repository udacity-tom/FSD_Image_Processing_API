import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing Image Processing API', () => {
  describe('Tests API functionality', () => {
    describe('Tests endpoint is responsive', () => {
      it('checks response status from the endpoint /convertImage with parameters', async () => {
        const response = await request.get(
          '/convertImage?filename=fjord.jpg&format=jpg&width=300&height=300'
        );
        expect(response.status).toBe(200);
      });
      it('checks status code from the endpoint /', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
      });
      it('checks the instructions page is delivered', async () => {
        const response = await request.get('/');
        expect(response.text).toContain(
          '<h1>Using the Image Processing API</h1>'
        );
      });
    });
    describe('Tests current response of /convertImage endpoint with no parameters', () => {
      it('checks response is redirected to /', async () => {
        const response = await request.get('/convertImage');
        expect(response.text).toBe('Found. Redirecting to /');
      });
      it('checks status code is 302 (redirection)', async () => {
        const response = await request.get('/convertImage');
        expect(response.status).toBe(302);
      });
    });
  });
  describe('Tests image processing', () => {
    it('checks image is returned', async () => {
      const response = await request.get(
        '/convertImage?filename=fjord.jpg&format=jpg&width=300&height=310'
      );
      expect(response.type).toContain('image/jpeg');
    });
  });
  describe('Tests error message response', () => {
    it('sends an error message if height not set', async () => {
      const response = await request.get(
        '/convertImage?filename=fjord.jpg&format=png&width=300&height='
      );
      expect(response.text).toContain('To resize image enter a valid height');
    });
    it('sends an error message if width not set', async () => {
      const response = await request.get(
        '/convertImage?filename=image.png&format=jpg&width=&height=310'
      );
      expect(response.text).toContain(
        'Error: To resize image enter a valid width.'
      );
    });
    it('sends an error message if file doesnt exist', async () => {
      const response = await request.get(
        '/convertImage?filename=image2.png&format=jpg&width=300&height=310'
      );
      expect(response.text).toContain(
        'Error: The requested input file does not exist'
      );
    });
  });
});
