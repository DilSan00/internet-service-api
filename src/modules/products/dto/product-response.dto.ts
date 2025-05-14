import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseDto {
  @ApiProperty({ example: '6824a1147e433b044147148b' })
  _id: string;

  @ApiProperty({ example: 'image.jpg' })
  image: string;

  @ApiProperty({ example: 'snikers' })
  title: string;

  @ApiProperty({ example: 'this product just best' })
  description: string;

  @ApiProperty({ example: 49 })
  price: number;

  @ApiProperty({ example: 90 })
  quantity: number;
}
