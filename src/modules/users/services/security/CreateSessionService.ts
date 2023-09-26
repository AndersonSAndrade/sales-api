import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/typeorm/entities/User';
import { UserRepository } from '@modules/users/typeorm/repositories/UserRepository';
import SecurityUtil from '@shared/utility/security';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionService {
  public async execute({
    email,
    password,
  }: IRequest): Promise<IResponse | AppError> {
    const repository = getCustomRepository(UserRepository);
    const security = new SecurityUtil();

    const user = await repository.findByName(email);
    if (!user) {
      throw new AppError(
        `E-Mail/Senha não confere, digite os dados novamente.`,
      );
    }

    const confirmedPassowrd = await security.compare(password, user.password);

    if (!confirmedPassowrd) {
      throw new AppError(`A senha não confere, digite uma senha válida.`);
    }

    const token = await security.token(user);

    return {
      user: user,
      token: token,
    };
  }
}

export default CreateSessionService;
