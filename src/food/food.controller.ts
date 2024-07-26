import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Food } from '@prisma/client';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('foods')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  async getAllFoods(): Promise<Food[]> {
    return this.foodService.findFoods();
  }

  @Get(':id')
  async getFoodById(@Param('id') id: number): Promise<Food> {
    return this.foodService.findFoodById(id);
  }

  @Post()
  async createFood(@Body() createFoodDto: CreateFoodDto): Promise<Food> {
    return this.foodService.insertFood(createFoodDto);
  }

  @Patch(':id')
  async updateFood(
    @Param('id') id: number,
    @Body() updateFoodDto: UpdateFoodDto,
  ): Promise<Food> {
    return this.foodService.editFood(id, updateFoodDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProductById(@Param('id') id: number): Promise<void> {
    await this.foodService.deleteFood(id);
  }
}
