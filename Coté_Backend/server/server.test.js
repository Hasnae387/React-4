        const request = require('supertest');
        const app = require('./server'); 

        describe('API Endpoints', () => {
        it('GET /api/menu should return menu data', async () => {
            const response = await request(app).get('/api/menu'); 
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body).toBeInstanceOf(Array); 
        });
        });
