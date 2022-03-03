import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeCreateDto, RecipeDto } from './dto/recipe-create.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAllRecipes(): Promise<RecipeDto[]> {
    return await this.recipesService.getAllRecipes();
  }

  @Post()
  async createRecipe(@Body() recipeDto: RecipeCreateDto): Promise<RecipeDto> {
    return await this.recipesService.createRecipe(recipeDto);
  }
}
