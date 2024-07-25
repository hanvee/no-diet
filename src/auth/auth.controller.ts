import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';
import { Tokens } from './type/token.type';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorators';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('register')
  async signUp(@Body() signUpDto: SignUpDto): Promise<Tokens> {
    return this.authservice.signUp(signUpDto);
  }

  @Post('login')
  async signIn(@Body() signInDto: SignInDto): Promise<Tokens> {
    return this.authservice.signIn(signInDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async signOut(@GetCurrentUserId() userId: number): Promise<void> {
    return this.authservice.signOut(userId);    
  }
}
