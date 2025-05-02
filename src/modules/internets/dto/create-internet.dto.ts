import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateInternetDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Название провайдера обязательно.' })
  @IsString({ message: 'Название провайдера должно быть строкой.' })
  providerName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Тип подключения обязателен.' })
  @IsString({ message: 'Тип подключения должен быть строкой.' })
  type: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty({ message: 'Скорость подключения обязательна.' })
  @IsNumber({}, { message: 'Скорость подключения должна быть числом.' })
  speed: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty({ message: 'Задержка обязательна.' })
  @IsNumber({}, { message: 'Задержка должна быть числом.' })
  latency: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNotEmpty({ message: 'Цена обязательна.' })
  @IsNumber({}, { message: 'Цена должна быть числом.' })
  @Min(1, { message: 'Цена должна быть не менее 1.' })
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Описание обязательно.' })
  @IsString({ message: 'Описание должно быть строкой.' })
  description: string;
}
