import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Applications {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  providerName: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  price: number;
}

export type ApplicationDocument = Applications & Document;
export const ApplicationsSchema = SchemaFactory.createForClass(Applications);
