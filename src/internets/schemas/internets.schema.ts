import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Internet {
  @Prop({ required: true })
  providerName: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  speed: number;

  @Prop({ required: true })
  latency: number;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;
}

export type InternetDocument = Internet & Document;
export const InternetSchema = SchemaFactory.createForClass(Internet);
