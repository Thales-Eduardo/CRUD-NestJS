import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'Nome é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Email é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'password é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  password: string;
}
