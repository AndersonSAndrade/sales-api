import { celebrate, Joi, Segments } from 'celebrate';

class CelebratePasswordValidation {
  public email = celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required().label('E-mail'),
    },
  });
}

export default CelebratePasswordValidation;
