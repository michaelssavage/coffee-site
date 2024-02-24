import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { testCoffee, testNewCoffee } from './data/TestData';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('CoffeeModule', () => {
    it('Post coffee, get all, get by name, delete', async () => {
      const data = await request(app.getHttpServer())
        .post('/coffee')
        .send(testNewCoffee)
        .expect(201);
      expect(data.body).toEqual({
        ...testNewCoffee,
        id: expect.any(Number),
      });
      const coffees = await request(app.getHttpServer())
        .get('/coffee')
        .expect(200);
      expect(coffees.body).toEqual(expect.any(Array));
      expect(coffees.body.length).toBe(6);
      expect(coffees.body[0]).toEqual({
        ...testCoffee,
        id: expect.any(Number),
      });
      const getByName = await request(app.getHttpServer())
        .get(`/coffee/e2e-test`)
        .expect(200);
      expect(getByName.body).toEqual(data.body);
      return request(app.getHttpServer())
        .delete(`/coffee/${data.body.id}`)
        .expect(200)
        .expect({ deleted: true });
    });
  });
});
