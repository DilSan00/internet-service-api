import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../../shared/decorators/current-user.decorator';

@ApiTags('Cart')
@Controller('cart')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Получить корзину пользователя' })
  async getCart(@CurrentUser() user) {
    return this.cartService.getCart(user.userId);
  }

  @Post('add')
  @ApiOperation({ summary: 'Добавить товар в корзину' })
  async addToCart(@CurrentUser() user, @Body() dto: AddToCartDto) {
    return this.cartService.addToCart(user.userId, dto);
  }

  // @Delete('remove/:productId')
  // @ApiOperation({ summary: 'Удалить товар из корзины' })
  // async removeFromCart(@CurrentUser() user, @Param('productId') productId: string) {
  //   return this.cartService.removeFromCart(user.userId, productId);
  // }

  @Patch('update/:productId')
  @ApiOperation({ summary: 'Обновить количество товара в корзине' })
  async updateQuantity(
    @CurrentUser() user,
    @Param('productId') productId: string,
    @Body('quantity') quantity: number
  ) {
    return this.cartService.updateQuantity(user.userId, productId, quantity);
  }

  @Delete('clear')
  @ApiOperation({ summary: 'Очистить корзину' })
  async clearCart(@CurrentUser() user) {
    return this.cartService.clearCart(user.userId);
  }
}
