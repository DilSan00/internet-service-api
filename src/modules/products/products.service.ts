import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products, ProductsDocument } from './schemas/products.schema';
import { Model } from 'mongoose';
import { ProductCreateDto } from './dto/product-create.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products.name) private productsModel: Model<ProductsDocument>) {}

  async findAll(): Promise<ProductsDocument[]> {
    return this.productsModel.find().exec();
  }

  async findById(id: string): Promise<ProductsDocument | null> {
    return this.productsModel.findById(id);
  }

  async create(dto: ProductCreateDto): Promise<ProductsDocument> {
    const createdProduct = new this.productsModel(dto);
    return createdProduct.save();
  }
}
