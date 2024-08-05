import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { User, UserDetail } from '@prisma/client';

@Injectable()
export class UserDetailService {
    constructor(private prisma: PrismaService) {}

    async findUserById(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (!user) {
            throw new NotFoundException('user not found');
        }

        return user;
    }

    async insertUserDetail(createUserDetailDto: CreateUserDetailDto): Promise<UserDetail> {
        await this.findUserById(createUserDetailDto.userId);

        return this.prisma.userDetail.create({
            data: createUserDetailDto
        });
    }
}
