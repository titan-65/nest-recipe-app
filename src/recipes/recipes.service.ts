import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipes.entity';
import { RecipeDto, RecipeCreateDto } from './dto/recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async getOneRecipe(id: string): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne(id);

    if (!recipe) {
      throw new HttpException('Recipe not found', HttpStatus.BAD_REQUEST);
    }

    return recipe;
  }

  async getAllRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipeRepository.find();

    return recipes;
  }

  async createRecipe(recipeDto: RecipeCreateDto): Promise<RecipeDto> {
    const {
      name,
      description,
      image,
      ingredients,
      directions,
      tags,
      prepTime,
      cookTime,
      servings,
      totalTime,
    } = recipeDto;

    const recipe: Recipe = await this.recipeRepository.create({
      name,
      description,
      image,
      ingredients,
      directions,
      tags,
      prepTime,
      cookTime,
      servings,
      totalTime,
    });

    return await this.recipeRepository.save(recipe);
  }

  async updateRecipe(
    id: string,
    recipeDto: RecipeCreateDto,
  ): Promise<RecipeDto> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const recipe = await this.getOneRecipe(id);

    const {
      name,
      description,
      image,
      ingredients,
      directions,
      tags,
      prepTime,
      cookTime,
      servings,
      totalTime,
    } = recipeDto;

    const newUpdatedRecipe: Recipe = await this.recipeRepository.update(id, {
      name,
      description,
      image,
      ingredients,
      directions,
      tags,
      prepTime,
      cookTime,
      servings,
      totalTime,
    });

    return await this.recipeRepository.save(newUpdatedRecipe);
  }
}
