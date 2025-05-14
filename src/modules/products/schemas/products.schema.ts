import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Products {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;
}

export type ProductsDocument = Products | Document;
export const ProductsSchema = SchemaFactory.createForClass(Products);
