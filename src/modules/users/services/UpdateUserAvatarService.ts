import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import { UserRepository } from '../typeorm/repositories/UserRepository';
import path from 'path';
import uploadConfig from '@config/upload';
import fs from 'fs';

interface IRequest {
  id: string;
  avatar: string;
}

class UpdateUserAvatarService {
  public async execute({ id, avatar }: IRequest): Promise<User> {
    const repository = getCustomRepository(UserRepository);

    const user = await repository.findOne(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.diretory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatar;

    await repository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
