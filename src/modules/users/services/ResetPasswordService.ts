import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../typeorm/repositories/UserRepository';
import { UserTokenRepository } from '../typeorm/repositories/UserTokenRepository';
import AppError from '@shared/errors/AppError';
import { addHours, isAfter } from 'date-fns';
import SecurityUtil from '@shared/utility/security';

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  public async execute({ token, password }: IRequest): Promise<void> {
    const repository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UserTokenRepository);

    const userToken = await userTokenRepository.findByToken(token);
    const security = new SecurityUtil();
    const passEncrypt = security.hashSync(password);

    if (!userToken) {
      throw new AppError('User Token does not exsists.');
    }

    const user = await repository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User Token does not exsists.');
    }

    const compareDate = addHours(userToken.created_at, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.');
    }

    user.password = passEncrypt;
    await repository.save(user);
  }
}

export default ResetPasswordService;
