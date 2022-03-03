import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class RecipeCreateDto {
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
}