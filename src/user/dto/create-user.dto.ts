import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty({ message: 'Nome is required' })
  @IsString({ message: 'Nome must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Senha is required' })
  @IsStrongPassword()
  password: string;

  @IsNotEmpty({ message: 'Departamento is required' })
  @IsString({ message: 'Departamento must be a string' })
  department: string;

  @IsNotEmpty({ message: 'Curso is required' })
  @IsString({ message: 'Curso must be a string' })
  course: string;

  @IsOptional()
  profilepic?: Buffer;
}
