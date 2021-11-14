import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthUserDto } from './dto/auth-user.sto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  public async authentication({ email, password }: AuthUserDto): Promise<void> {
    const findByEmail = await this.UserModel.findOne({ email: email });

    if (!findByEmail) {
      throw new HttpException('E-mail ou senha esta incorreto.', HttpStatus.NOT_FOUND);
    }

    const findByPassword = await this.UserModel.findOne({ password: password });

    if (!findByPassword) {
      throw new HttpException('E-mail ou senha esta incorreto.', HttpStatus.NOT_FOUND);
    }
  }

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const email = await this.UserModel.findOne({ email: createUserDto.email });

    if (email) {
      throw new HttpException('Esse e-mail já esta cadastrado.', HttpStatus.BAD_REQUEST);
    }

    const user = new this.UserModel(createUserDto);
    return user.save();
  }

  public async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  public async findOne(id: string): Promise<User | undefined> {
    const user = await this.UserModel.findById(id);
    if(!user){
      throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.UserModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  public async remove(id: string): Promise<void> {
    await this.UserModel.deleteOne({ _id: id }).exec();
  }
}
