import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsNumber,
  IsDate,
} from 'class-validator';

export class RecipeDto {
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  ingredients: string[];

  @IsArray()
  directions: string[];

  @IsArray()
  tags: string[];

  @IsNumber()
  prepTime: number;

  @IsNumber()
  cookTime: number;

  @IsNumber()
  servings: number;

  @IsNumber()
  totalTime: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
