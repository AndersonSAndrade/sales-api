import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import { UserRepository } from '../typeorm/repositories/UserRepository';

interface IRequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const repository = getCustomRepository(UserRepository);

    const user = await repository.findOne(id);

    if (!user) {
      throw new AppError('O Usuário não existe no sistema', 404);
    }

    await repository.remove(user);
  }
}

export default DeleteUserService;
