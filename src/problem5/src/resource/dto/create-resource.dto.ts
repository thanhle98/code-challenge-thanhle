import { IsString } from 'class-validator';

export class CreateResourceDto {
  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsString()
  description: string;
}
