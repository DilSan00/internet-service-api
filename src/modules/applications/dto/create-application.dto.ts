import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateApplicationsDto {
  @ApiProperty({ example: 'Иванов Иван Иванович' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+996707123456' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'Snikers' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 199, description: 'Цена в сомах' })
  @Type(() => Number)
  @IsNumber()
  price: number;
}
