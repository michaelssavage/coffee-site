import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { CoffeeType } from '../enums';

export class UpdateCoffeeDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsEnum(CoffeeType)
  @IsNotEmpty()
  type: CoffeeType;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @MinLength(10, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  description: string;
}
