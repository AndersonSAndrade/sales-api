import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

/**
 * @author Anderson S. Andrade
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByName(email: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}
