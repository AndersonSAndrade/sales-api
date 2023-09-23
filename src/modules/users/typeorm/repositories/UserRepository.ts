import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

/**
 * @author Anderson S. Andrade
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findByName(email: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}
