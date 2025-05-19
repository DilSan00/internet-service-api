import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Applications {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;
}

export type ApplicationDocument = Applications & Document;
export const ApplicationsSchema = SchemaFactory.createForClass(Applications);
