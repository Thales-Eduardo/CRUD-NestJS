import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDto {
  @ApiProperty({
    type: 'string',
    example: 'thalesdev22@gmail.com',
  })
  @IsString({ message: 'email é do tipo string' })
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
