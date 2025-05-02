import { ApiProperty } from '@nestjs/swagger';

export class InternetResponseDto {
  @ApiProperty({ example: '661f3a293abc1e23b6789012' })
  _id: string;

  @ApiProperty({ example: 'Aknet' })
  providerName: string;

  @ApiProperty({ example: 'Premium' })
  type: string;

  @ApiProperty({ example: 100 })
  speed: number;

  @ApiProperty({ example: 20 })
  latency: number;

  @ApiProperty({ example: 25.99 })
  price: number;

  @ApiProperty({ example: 'Быстрый интернет для геймеров' })
  description: string;
}
