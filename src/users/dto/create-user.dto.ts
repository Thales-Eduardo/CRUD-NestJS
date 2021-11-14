import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ValidateNested()
  @ApiProperty({
    type: 'string',
    example: 'Thales Eduardo',
  })
  @IsString({ message: 'Nome é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  name: string;

  @ValidateNested()
  @ApiProperty({
    type: 'string',
    example: 'thalesdev22@gmail.com',
  })
  @IsString({ message: 'Email é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  email: string;

  @ValidateNested()
  @ApiProperty({
    type: 'string',
    example: '123456',
  })
  @IsString({ message: 'password é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  password: string;
}
