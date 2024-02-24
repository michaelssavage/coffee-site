import { Test } from '@nestjs/testing';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import {
  testCoffee,
  testCreateCoffee,
  testUpdateCoffee,
} from 'test/data/TestData';

describe('CoffeeController', () => {
  let coffeeController: CoffeeController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [
        {
          provide: CoffeeService,
          useValue: {
            createCoffee: jest.fn(() => testCoffee),
            findAllCoffee: jest.fn(() => [testCoffee]),
            findCoffeeByName: jest.fn(() => testCoffee),
            updateCoffee: jest.fn(() => testCoffee),
            removeCoffee: jest.fn().mockResolvedValue({ deleted: true }),
          },
        },
      ],
    }).compile();

    coffeeController = module.get(CoffeeController);
  });

  it('should create a Coffee', async () => {
    const result = await coffeeController.createCoffee(testCreateCoffee);
    expect(result).toEqual(testCoffee);
  });

  it('should find all Coffees', async () => {
    const result = await coffeeController.findAllCoffee();
    expect(result).toEqual([testCoffee]);
  });

  it('should find Coffee by name', async () => {
    const result = await coffeeController.findCoffeeByName('Americano');
    expect(result).toEqual(testCoffee);
  });

  it('should update Coffee', async () => {
    const coffeeId = '1';
    const result = await coffeeController.updateCoffee(
      coffeeId,
      testUpdateCoffee,
    );
    expect(result).toEqual(testCoffee);
  });

  it('should remove a Coffee', async () => {
    const coffeeId = '1';
    await expect(coffeeController.removeCoffee(coffeeId)).resolves.toEqual({
      deleted: true,
    });
  });
});
