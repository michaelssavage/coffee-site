import { Injectable } from '@nestjs/common';
import { seedItems } from './data/seedItems';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from 'src/coffee/entity/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async seedCoffees(): Promise<void> {
    await this.coffeeRepository.clear();

    try {
      this.coffeeRepository.save(seedItems);
    } catch (err) {
      throw new Error('Unexpected error while creating new coffee');
    }
  }
}
