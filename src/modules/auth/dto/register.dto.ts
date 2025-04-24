import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Имя пользователя обязательно.' })
  @IsString({ message: 'Имя пользователя должно быть строкой.' })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Электронная почта обязательна.' })
  @IsEmail({}, { message: 'Адрес электронной почты должен быть действительным.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Пароль обязателен.' })
  @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов.' })
  password: string;
}
