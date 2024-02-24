import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entity';
import { CoffeeService } from './coffee.service';
import { ConflictException } from '@nestjs/common';
import {
  testCoffee,
  testCreateCoffee,
  testUpdateCoffee,
} from 'test/data/TestData';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let repo: Repository<Coffee>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeeService,
        {
          provide: getRepositoryToken(Coffee),
          useValue: {
            save: jest.fn().mockResolvedValue(testCoffee),
            find: jest.fn().mockResolvedValue([testCoffee]),
            findOne: jest.fn().mockResolvedValue(testCoffee),
            update: jest.fn().mockResolvedValue(true),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    service = module.get<CoffeeService>(CoffeeService);
    repo = module.get<Repository<Coffee>>(getRepositoryToken(Coffee));
  });

  it('should return all coffees', async () => {
    const result = await service.findAllCoffee();
    expect(result).toEqual([testCoffee]);
  });

  it('should create a coffee', async () => {
    jest.spyOn(repo, 'findOne').mockResolvedValueOnce(null);
    const result = await service.createCoffee(testCreateCoffee);
    expect(result).toEqual(testCoffee);
  });

  it('should fail if a coffee exists', async () => {
    jest.spyOn(repo, 'findOne').mockResolvedValueOnce(testCoffee);
    await expect(service.createCoffee(testCreateCoffee)).rejects.toThrow(
      ConflictException,
    );
  });

  it('should return a coffee by name', async () => {
    const result = await service.findCoffeeByName('Americano');
    expect(result).toEqual(testCoffee);
  });

  it('should update a coffee', async () => {
    const coffeeId = 1;
    const result = await service.updateCoffee(coffeeId, testUpdateCoffee);
    expect(result).toEqual(testCoffee);
  });

  it('should remove a coffee', async () => {
    const coffeeId = 1;
    await expect(service.removeCoffee(coffeeId)).resolves.toEqual({
      deleted: true,
    });
  });
});
