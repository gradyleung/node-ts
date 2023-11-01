import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/user.test.ts', () => {
  it('should GET /user', async () => {
    await app.httpRequest().get('/user').expect(200);
  });
});
