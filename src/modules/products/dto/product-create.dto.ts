import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class ProductCreateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Поле не должно быть пустым' })
  @IsString({ message: 'Поле должно быть строкой' })
  image: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле  не должно быть пустым' })
  @IsString({ message: 'Поле должно быть строкой' })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле не должно быть пустым' })
  @IsString({ message: 'Поле должно быть строкой' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле не должно быть пустым' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Поле должно быть числом' })
  @Min(0, { message: 'Цена не может быть меньше 0' })
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Поле не должно быть пустым' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Поле должно быть числом' })
  @Min(0, { message: 'Количество не может быть меньше 0' })
  quantity: number;
}
