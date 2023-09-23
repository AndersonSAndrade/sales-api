import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UserRepository';

interface IRequest {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  phone: string;
  biography: string;
}

class UpdateUserService {
  public async execute({
    id,
    firstname,
    lastname,
    email,
    password,
    avatar,
    phone,
    biography,
  }: IRequest): Promise<User> {
    const repository = getCustomRepository(UserRepository);

    const user = await repository.findOne(id);

    if (!user) {
      throw new AppError('O Produto não existe no sistema', 404);
    }

    const userExsists = await repository.findByName(email);
    if (userExsists && email !== user.email) {
      throw new AppError(
        `Já existe um usuário com este nome => ${userExsists.email}`,
        400,
      );
    }

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    user.phone = phone;
    user.avatar = avatar;
    user.biography = biography;

    await repository.save(user);

    return user;
  }
}

export default UpdateUserService;
