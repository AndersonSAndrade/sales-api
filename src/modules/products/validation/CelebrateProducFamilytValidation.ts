import { celebrate, Joi, Segments } from 'celebrate';

class Validation {
  public show = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });

  public create = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  });

  public update = celebrate({
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
      name: Joi.string().min(3).max(100).required(),
      created_at: Joi.date(),
      updated_at: Joi.date(),
    },
  });
}

export default Validation;
