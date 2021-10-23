import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  name: string;

  @IsString({ message: 'Email é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  email: string;

  @IsString({ message: 'password é do tipo string' })
  @IsNotEmpty({ message: 'password é obrigatório' })
  password: string;
}
