import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MinLength,
  IsEnum,
  MaxLength,
} from 'class-validator';
import { CoffeeType } from '../enums';

export class CreateCoffeeDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @MaxLength(100, { message: 'Name must have less than 100 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsEnum(CoffeeType)
  @IsNotEmpty()
  type: CoffeeType;

  @IsUrl()
  @MaxLength(300, { message: 'URL must have less than 300 characters.' })
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @MinLength(10, { message: 'Description must have at least 2 characters.' })
  @MaxLength(200, {
    message: 'Description must have less than 200 characters.',
  })
  @IsNotEmpty()
  description: string;
}
