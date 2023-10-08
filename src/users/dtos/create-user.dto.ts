import { IsEmail, IsStrongPassword, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsStrongPassword()
  @IsOptional()
  password: string;
}
