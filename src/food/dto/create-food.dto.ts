import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFoodDto {
    @IsNotEmpty()
    @IsString()
    name: string; 

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsNumber()
    calories: number;

    @IsNotEmpty()
    @IsNumber()
    protein: number;

    @IsNotEmpty()
    @IsNumber()
    carbohydrates: number;
    
    @IsNotEmpty()
    @IsNumber()
    fats: number;

    @IsNotEmpty()
    @IsNumber()
    fiber: number;

    @IsNotEmpty()
    @IsNumber()
    sugar: number;
}