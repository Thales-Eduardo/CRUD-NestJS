import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ValidateNested()
  @ApiProperty({
    type: 'string',
    example: 'Thales Eduardo2',
  })
  @IsString({ message: 'Nome é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  name: string;

  @ValidateNested()
  @ApiProperty({
    type: 'string',
    example: 'thalesdev@gmail.com',
  })
  @IsString({ message: 'Email é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  email: string;

  @ValidateNested()
  @ApiProperty({
    type: 'string',
    example: '1234567',
  })
  @IsString({ message: 'password é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  password: string;
}
