import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceDto } from './create-resource.dto';

export class UpdateResourceDto extends PartialType(CreateResourceDto) {
  name?: string;
  url?: string;
  description?: string;
}
