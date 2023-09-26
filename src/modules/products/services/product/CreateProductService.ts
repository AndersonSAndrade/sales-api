import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../../typeorm/repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';
import Products from '../../typeorm/entities/Products';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
  ross_weight: number;
  net_weight: number;
  toler_weight: number;
  volume: number;
}

class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
    ross_weight,
    net_weight,
    toler_weight,
    volume,
  }: IRequest): Promise<Products | AppError> {
    const repository = getCustomRepository(ProductRepository);

    const procuctExsists = await repository.findByName(name);
    if (procuctExsists) {
      throw new AppError(`Já existe um produto com este nome`);
    }

    const product = repository.create({
      name,
      price,
      quantity,
      ross_weight,
      net_weight,
      toler_weight,
      volume,
    });

    await repository.save(product);

    return product;
  }
}

export default CreateProductService;
