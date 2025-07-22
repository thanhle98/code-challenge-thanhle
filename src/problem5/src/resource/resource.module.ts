import { Module } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { Resource } from './entities/resource.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceSchema } from './entities/resource.entity';
import { ResourceService } from './resource.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resource.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
