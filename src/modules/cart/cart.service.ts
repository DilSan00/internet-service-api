import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    private productsService: ProductsService
  ) {}

  async getCart(userId: string): Promise<CartDocument> {
    let cart = await this.cartModel
      .findOne({ userId: new Types.ObjectId(userId) })
      .populate({
        path: 'items.productId',
        select: 'title price image',
      })
      .exec();

    if (!cart) {
      cart = await this.cartModel.create({
        userId: new Types.ObjectId(userId),
        items: [],
        totalPrice: 0,
      });
    }

    return cart;
  }

  async addToCart(userId: string, dto: AddToCartDto): Promise<CartDocument> {
    const product = await this.productsService.findById(dto.productId);
    if (!product) {
      throw new NotFoundException('Товар не найден');
    }

    let cart = await this.cartModel
      .findOne({ userId: new Types.ObjectId(userId) })
      .populate({
        path: 'items.productId',
        select: 'title price image',
      })
      .exec();

    if (!cart) {
      cart = await this.cartModel.create({
        userId: new Types.ObjectId(userId),
        items: [],
        totalPrice: 0,
      });
    }

    const existingItem = cart.items.find((item) => item.productId.toString() === dto.productId);

    if (existingItem) {
      existingItem.quantity += dto.quantity;
    } else {
      cart.items.push({
        productId: new Types.ObjectId(dto.productId),
        quantity: dto.quantity,
      });
    }

    await cart.populate({
      path: 'items.productId',
      select: 'title price image',
    });

    cart.totalPrice = cart.items.reduce((total, item) => {
      const product = item.productId as any;
      return total + product.price * item.quantity;
    }, 0);

    return cart.save();
  }

  // async removeFromCart(userId: string, productId: string): Promise<CartDocument> {
  //   const cart = await this.cartModel
  //     .findOne({ userId: new Types.ObjectId(userId) })
  //     .populate({
  //       path: 'items.productId',
  //       select: 'title price image',
  //     })
  //     .exec();

  //   if (!cart) {
  //     throw new NotFoundException('Корзина не найдена');
  //   }

  //   cart.items = cart.items.filter((item) => item.productId.toString() !== productId);

  //   cart.totalPrice = cart.items.reduce((total, item) => {
  //     const product = item.productId as any;
  //     return total + product.price * item.quantity;
  //   }, 0);

  //   return cart.save();
  // }

  async updateQuantity(userId: string, productId: string, quantity: number): Promise<CartDocument> {
    const cart = await this.cartModel
      .findOne({ userId: new Types.ObjectId(userId) })
      .populate({
        path: 'items.productId',
        select: 'title price image',
      })
      .exec();

    if (!cart) {
      throw new NotFoundException('Корзина не найдена');
    }

    const item = cart.items.find((item) => item.productId.toString() === productId);

    if (!item) {
      throw new NotFoundException('Товар не найден в корзине');
    }

    item.quantity = quantity;

    cart.totalPrice = cart.items.reduce((total, item) => {
      const product = item.productId as any;
      return total + product.price * item.quantity;
    }, 0);

    return cart.save();
  }

  async clearCart(userId: string): Promise<CartDocument> {
    const cart = await this.cartModel.findOne({ userId: new Types.ObjectId(userId) }).exec();

    if (!cart) {
      throw new NotFoundException('Корзина не найдена');
    }

    cart.items = [];
    cart.totalPrice = 0;

    return cart.save();
  }
}
