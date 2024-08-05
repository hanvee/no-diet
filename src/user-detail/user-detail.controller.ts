import { Body, Controller, Post } from '@nestjs/common';
import { UserDetailService } from './user-detail.service';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UserDetail } from '@prisma/client';

@Controller('user-detail')
export class UserDetailController {
    constructor(private userDetailService: UserDetailService) {}

    @Post()
    async createUserDetail(@Body() createUserDetailDto: CreateUserDetailDto): Promise<UserDetail> {
        return this.userDetailService.insertUserDetail(createUserDetailDto);
    }
}
