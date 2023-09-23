import { celebrate, Joi, Segments } from 'celebrate';

class ValidationUser {
  public show = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });
  public create = celebrate({
    [Segments.BODY]: {
      firstname: Joi.string().required().label('Nome'),
      lastname: Joi.string().required().label('Sobrenome'),
      email: Joi.string().required().email().label('E-mail'),
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
