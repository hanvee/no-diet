import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FoodModule } from './food/food.module';
import { UserDetailModule } from './user-detail/user-detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    FoodModule,
    UserDetailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
