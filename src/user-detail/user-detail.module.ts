import { Module } from '@nestjs/common';
import { UserDetailController } from './user-detail.controller';
import { UserDetailService } from './user-detail.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserDetailController],
  providers: [UserDetailService, PrismaService]
})
export class UserDetailModule {}
