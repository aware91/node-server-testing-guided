const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  it('that the testing environment is set up', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })

  describe('GET /', ()=> {
    let res = {};
    beforeAll(async () => {
      res = await request(server).get('/');
    })
    it('should return 200 ok', () => {
      // return request(server).get('/')
      //   .then(res => {
      //     expect(res.status).toBe(200);
      //   })
      expect(res.status).toBe(200);
    })
    it('should return ok using async/await', async () => {
      // const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })
    it('should return a JSON object', async () => {
      // const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    })
    it('should return{api:"up"}', () => {
      expect(res.body).toEqual({ api: 'up' })
    })
  })
})
