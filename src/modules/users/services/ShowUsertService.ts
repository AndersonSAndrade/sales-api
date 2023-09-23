import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UserRepository';

interface IRequest {
  id: string;
}

class ShowUserService {
  public async execute({ id }: IRequest): Promise<User> {
    const repository = getCustomRepository(UserRepository);

    const user = await repository.findOne(id);

    if (!user) {
      throw new AppError('O Usuário não existe no sistema', 404);
    }

    return user;
  }
}

export default ShowUserService;
