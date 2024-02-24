import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto';
import { Coffee } from './entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async createCoffee(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    if (await this.findCoffeeByName(createCoffeeDto.name)) {
      throw new ConflictException(`${createCoffeeDto.name} already exists`);
    }

    try {
      const coffee: Coffee = new Coffee();
      coffee.name = createCoffeeDto.name;
      coffee.price = createCoffeeDto.price;
      coffee.type = createCoffeeDto.type;
      coffee.description = createCoffeeDto.description;
      coffee.imageUrl = createCoffeeDto.imageUrl;
      return this.coffeeRepository.save(coffee);
    } catch (err) {
      throw new Error('Unexpected error while creating new coffee');
    }
  }

  async findAllCoffee(): Promise<Coffee[]> {
    try {
      return await this.coffeeRepository.find();
    } catch (err) {
      throw new Error('Unexpected error while retrieving all coffees');
    }
  }

  async findCoffeeByName(name: string): Promise<Coffee> {
    try {
      return await this.coffeeRepository.findOne({
        where: { name: name },
      });
    } catch (err) {
      throw new Error(
        `Unexpected error while retrieving coffee by name: ${name}`,
      );
    }
  }

  async updateCoffee(
    id: number,
    updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<Coffee> {
    try {
      const coffee: Coffee = new Coffee();
      coffee.name = updateCoffeeDto.name;
      coffee.price = updateCoffeeDto.price;
      coffee.type = updateCoffeeDto.type;
      coffee.imageUrl = updateCoffeeDto.imageUrl;
      coffee.description = updateCoffeeDto.description;
      coffee.id = id;
      await this.coffeeRepository.update(id, coffee);
      return this.findCoffeeByName(coffee.name);
    } catch (err) {
      throw new Error(`Unexpected error while updating coffee by id: ${id}`);
    }
  }

  async removeCoffee(
    id: number,
  ): Promise<{ deleted: boolean; message?: string }> {
    try {
      await this.coffeeRepository.delete(id);
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }
}
