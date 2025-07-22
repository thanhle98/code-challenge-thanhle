import { IsNumber, IsString } from 'class-validator';

export class FindAllResourceDto {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  order?: string;
}
