import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post()
  async createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.createCoffee(createCoffeeDto);
  }

  @Get()
  async findAllCoffee() {
    return this.coffeeService.findAllCoffee();
  }

  @Get(':name')
  async findCoffeeByName(@Param('name') name: string) {
    return this.coffeeService.findCoffeeByName(name);
  }

  @Put(':id')
  async updateCoffee(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.updateCoffee(+id, updateCoffeeDto);
  }

  @Delete(':id')
  async removeCoffee(@Param('id') id: string) {
    return this.coffeeService.removeCoffee(+id);
  }
}
