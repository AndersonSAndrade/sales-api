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
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
  });

  public update = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });
}

export default Validation;
