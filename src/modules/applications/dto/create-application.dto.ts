import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateApplicationsDto {
  @ApiProperty({ example: 'Иванов Иван Иванович' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+996707123456' })
  @IsPhoneNumber('KG')
  phone: string;

  @ApiProperty({ example: 'Snikers' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 199, description: 'Цена в сомах' })
  @IsNumber()
  price: number;
}
