import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    type: 'string',
    example: 'Thales Eduardo2',
  })
  @IsString({ message: 'nome é do tipo string' })
  @IsNotEmpty({ message: 'Name é obrigatório' })
  name: string;

  @ApiProperty({
    type: 'string',
    example: 'thalesdev@gmail.com',
  })
  @IsString({ message: 'email é do tipo string' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;

  @ApiProperty({
    type: 'string',
    example: '1234567',
  })
  @IsString({ message: 'password é do tipo string' })
  @IsNotEmpty({ message: 'Password é obrigatório' })
  password: string;
}
