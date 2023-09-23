import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';
import { Products } from '../typeorm/entities/Products';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
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
    });

    await repository.save(product);

    return product;
  }
}

export default CreateProductService;
