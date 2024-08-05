
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Gender } from '../enum/gender.enum';
import { ActivityLevel } from '../enum/acitivity-level.enum';

export class CreateUserDetailDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  currentWeight: number;

  @IsNotEmpty()
  @IsNumber()
  goalWeight: number;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsEnum(Gender, {
    message: 'Gender must be male or female',
  })
  @IsNotEmpty()
  gender: Gender;

  @IsNotEmpty()
  @IsNumber()
  height: number;

  @IsEnum(ActivityLevel, {
    message: 'Activity level cannot be empty',
  })
  @IsNotEmpty()
  activityLevel: ActivityLevel;
}
