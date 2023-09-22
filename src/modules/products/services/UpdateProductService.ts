import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';
import { Products } from '../typeorm/entities/Products';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Products> {
    const repository = getCustomRepository(ProductRepository);

    const product = await repository.findOne(id);

    if (!product) {
      throw new AppError('O Produto não existe no sistema', 404);
    }

    const procuctExsists = await repository.findByName(name);
    if (procuctExsists && name !== product.name) {
      throw new AppError(
        `Já existe um produto com este nome => ${procuctExsists.name}`,
        400,
      );
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await repository.save(product);

    return product;
  }
}

export default UpdateProductService;
