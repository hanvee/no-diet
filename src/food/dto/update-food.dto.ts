import { IsOptional, IsNumber, IsString } from "class-validator";

export class UpdateFoodDto {
    @IsOptional() 
    @IsString()
    name: string; 

    @IsOptional() 
    @IsString()
    category: string;

    @IsOptional() 
    @IsNumber()
    calories: number;

    @IsOptional() 
    @IsNumber()
    protein: number;

    @IsOptional() 
    @IsNumber()
    carbohydrates: number;
    
    @IsOptional() 
    @IsNumber()
    fats: number;

    @IsOptional() 
    @IsNumber()
    fiber: number;

    @IsOptional() 
    @IsNumber()
    sugar: number;
}
