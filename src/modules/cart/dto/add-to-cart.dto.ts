import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, Min } from 'class-validator';

export class AddToCartDto {
  @ApiProperty({ description: 'ID продукта' })
  @IsMongoId()
  productId: string;

  @ApiProperty({ description: 'Количество товара', minimum: 1 })
  @IsNumber()
  @Min(1)
  quantity: number;
}
