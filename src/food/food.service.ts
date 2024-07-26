import { Injectable, NotFoundException } from '@nestjs/common';
import { Food } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Injectable()
export class FoodService {
  constructor(private prisma: PrismaService) {}

  async findFoods(): Promise<Food[]> {
    return this.prisma.food.findMany();
  }

  async findFoodById(id: number): Promise<Food> {
    const food = await this.prisma.food.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!food) {
      throw new NotFoundException('food not found');
    }

    return food;
  }

  async insertFood(createFoodDto: CreateFoodDto): Promise<Food> {
    return this.prisma.food.create({
      data: createFoodDto,
    });
  }

  async editFood(id: number, updateFoodDto: UpdateFoodDto): Promise<Food> {
    await this.findFoodById(id);

    return this.prisma.food.update({
      where: {
        id: Number(id),
      },
      data: {
        name: updateFoodDto.name,
        category: updateFoodDto.category,
        calories: updateFoodDto.calories,
        protein: updateFoodDto.protein,
        carbohydrates: updateFoodDto.carbohydrates,
        fats: updateFoodDto.fats,
        fiber: updateFoodDto.fiber,
        sugar: updateFoodDto.sugar,
      },
    });
  }

  async deleteFood(id: number): Promise<void> {
    await this.findFoodById(id);

    await this.prisma.food.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
