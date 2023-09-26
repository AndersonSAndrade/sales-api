import { celebrate, Joi, Segments } from 'celebrate';

class ValidationUser {
  public login = celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required().label('E-mail'),
      password: Joi.string().required().label('Senha'),
    },
  });
  public show = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });
  public create = celebrate({
    [Segments.BODY]: {
      firstname: Joi.string().min(3).max(100).required().label('Nome'),
      lastname: Joi.string().min(3).max(100).required().label('Sobrenome'),
      email: Joi.string().email().min(3).max(200).required().label('E-mail'),
      password: Joi.string().required().label('Senha'),
      avatar: Joi.string().required().label('Image Perfil'),
      phone: Joi.string().required().label('Sobrenome'),
      biography: Joi.string().required().label('Biografia'),
    },
  });

  public update = celebrate({
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
      firstname: Joi.string().required().label('Nome'),
      lastname: Joi.string().required().label('Sobrenome'),
      email: Joi.string().required().email().label('E-mail'),
      password: Joi.string().required().label('Senha'),
      avatar: Joi.string().required().label('Image Perfil'),
      phone: Joi.string().required().label('Sobrenome'),
      biography: Joi.string().required().label('Biografia'),
    },
  });
}

export default ValidationUser;
