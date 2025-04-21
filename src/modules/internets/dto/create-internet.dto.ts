import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateInternetDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  providerName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsNumber()
  speed: number;

  @ApiProperty()
  @IsNumber()
  latency: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  price: number;

  @ApiProperty()
  @IsString()
  description: string;
}
