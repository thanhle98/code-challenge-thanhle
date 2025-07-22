import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Resource {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false, default: Date.now })
  createdAt: Date;

  @Prop({ required: false, default: Date.now })
  updatedAt: Date;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);