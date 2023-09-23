import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import { UserRepository } from '../typeorm/repositories/UserRepository';

interface IRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  phone: string;
  biography: string;
}

class CreateUserService {
  public async execute({
    firstname,
    lastname,
    email,
    password,
    avatar,
    phone,
    biography,
  }: IRequest): Promise<User | AppError> {
    const repository = getCustomRepository(UserRepository);

    const userExsists = await repository.findByName(email);
    if (userExsists) {
      throw new AppError(`Já existe um usuário com este nome`);
    }

    const user = repository.create({
      firstname,
      lastname,
      email,
      password,
      avatar,
      phone,
      biography,
    });

    await repository.save(user);

    return user;
  }
}

export default CreateUserService;
