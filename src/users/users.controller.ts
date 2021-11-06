import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Put,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody } from '@nestjs/swagger';
import { AuthUserDto } from './dto/auth-user.sto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  async createUser(
    @Res() res: Response,
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    try {
      const user = await this.usersService.create(createUserDto);
      return res.status(HttpStatus.CREATED).json({
        message: '[INFO]] {createUser} - Usuário criado com sucesso',
        status: true,
        metadata: user,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: '[ERRO] {createUser} - Erro ao criar novo usuário',
        status: false,
        erro: error.message,
      });
    }
  }

  @Post('login')
  @ApiBody({ type: AuthUserDto })
  async authenticationController(
    @Res() res: Response,
    @Body(ValidationPipe)
    data: AuthUserDto,
  ) {
    try {
      await this.usersService.authentication(data);
      return res.status(HttpStatus.OK).json({
        message: '[INFO]] {createUser} - Usuário logado com sucesso',
        status: true,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: '[ERRO] {createUser} - Erro ao logar usuário',
        status: false,
        erro: error.message,
      });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const users = await this.usersService.findAll();
      return res.status(HttpStatus.CREATED).json({
        message: '[INFO]] {findAll} - Sucesso ao buscar todo os usuários',
        status: true,
        metadata: users,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: '[ERRO] {findAll} - Erro ao buscar todo os usuários',
        status: false,
        erro: error.message,
      });
    }
  }

  @Get(':id')
  async findOne(@Res() res: Response, @Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(id);
      return res.status(HttpStatus.CREATED).json({
        message: '[INFO]] {findOne} - Sucesso ao buscar o usuário pelo id',
        status: true,
        metadata: user,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: '[ERRO] {findOne} - Erro ao buscar o usuário pelo id',
        status: false,
        erro: error.message,
      });
    }
  }

  @Put(':id')
  @ApiBody({ type: UpdateUserDto })
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    try {
      const user = await this.usersService.update(id, updateUserDto);
      return res.status(HttpStatus.CREATED).json({
        message: '[INFO]] {update} - Sucesso ao atualizar usuário pelo id',
        status: true,
        metadata: user,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: '[ERRO] {update} - Erro ao atualizar o usuário pelo id',
        status: false,
        erro: error.message,
      });
    }
  }

  @Delete(':id')
  async remove(@Res() res: Response, @Param('id') id: string) {
    try {
      await this.usersService.remove(id);
      return res.status(HttpStatus.CREATED).json({
        message: '[INFO]] {remove} - Sucesso ao deletar usuário pelo id',
        status: true,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: '[ERRO] {remove} - Erro ao deletar o usuário pelo id',
        status: false,
        erro: error.message,
      });
    }
  }
}
