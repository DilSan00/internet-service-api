import { ApiProperty } from '@nestjs/swagger';

export class ApplicationResponseDto {
  @ApiProperty({ example: '6815067340d80542ee6dd3b7' })
  _id: string;

  @ApiProperty({ example: 'Иванов Иван Иванович' })
  fullName: string;

  @ApiProperty({ example: '+996707123456' })
  phone: string;

  @ApiProperty({ example: 'MegaCom' })
  providerName: string;

  @ApiProperty({ example: 'Premium' })
  type: string;

  @ApiProperty({ example: 199, description: 'Цена в сомах' })
  price: number;
}
