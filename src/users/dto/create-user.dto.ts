import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    example: 'Thales Eduardo',
  })
  @IsString({ message: 'Nome é do tipo string' })
  @IsNotEmpty({ message: 'name é obrigatório' })
  name: string;

  @ApiProperty({
    type: 'string',
    example: 'thalesdev22@gmail.com',
  })
  @IsString({ message: 'Email é do tipo string' })
  @IsNotEmpty({ message: 'email é obrigatório' })
  email: string;

  @ApiProperty({
    type: 'string',
    example: '123456',
  })
  @IsString({ message: 'password é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  password: string;
}
