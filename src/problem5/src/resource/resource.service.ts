import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { FindAllResourceDto } from './dto/find-resource.dto';
import { Model } from 'mongoose';
import { Resource } from './entities/resource.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource.name) private resourceModel: Model<Resource>,
  ) {}

  create(createResourceDto: CreateResourceDto) {
    return this.resourceModel.create(createResourceDto);
  }

  findAll(queryDto: FindAllResourceDto) {
    const { page = 1, limit = 25, search, sort = 'createdAt', order = 'desc' } = queryDto;
    const query = this.resourceModel.find();
    if (search) {
      query.find({ name: { $regex: search, $options: 'i' } });
    }
    query.skip((page - 1) * limit).limit(limit);
    query.sort({ [sort]: order === 'asc' ? 1 : -1 });
    return query.exec();
  }

  async findOne(id: string) {
    const resource = await this.resourceModel.findById(id);
    if (!resource) {
      throw new NotFoundException('Resource not found');
    }
    return resource;
  }

  async update(id: string, updateResourceDto: UpdateResourceDto) {
    const resource = await this.resourceModel.findByIdAndUpdate(
      id,
      updateResourceDto,
    );
    if (!resource) {
      throw new NotFoundException('Resource not found');
    }
    return 'Resource updated successfully';
  }

  async remove(id: string) {
    const resource = await this.resourceModel.findByIdAndDelete(id);
    if (!resource) {
      throw new NotFoundException('Resource not found');
    }
    return 'Resource deleted successfully';
  }
}
