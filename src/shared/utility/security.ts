import User from '@modules/users/typeorm/entities/User';
import { compare, hashSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import auth from '@config/auth';

class SecurityUtil {
  public hashSync(password: string) {
    return hashSync(password, 8);
  }

  public compare(passwordEntered: string, userPassword: string) {
    return compare(passwordEntered, userPassword);
  }

  public token(user: User) {
    return sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });
  }

  public verify(token: string) {
    return verify(token, auth.jwt.secret);
  }
}

export default SecurityUtil;
