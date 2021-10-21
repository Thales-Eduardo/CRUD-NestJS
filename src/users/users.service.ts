import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.UserModel(createUserDto);
    return user.save();
  }

  public async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  public async findOne(id: string): Promise<User | undefined> {
    return this.UserModel.findById(id);
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
