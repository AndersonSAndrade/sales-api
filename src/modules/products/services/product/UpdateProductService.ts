import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Products from '@modules/products/typeorm/entities/Products';
import { ProductRepository } from '@modules/products/typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
  ross_weight: number;
  net_weight: number;
  toler_weight: number;
  volume: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
    ross_weight,
    net_weight,
    toler_weight,
    volume,
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
    product.ross_weight = ross_weight;
    product.net_weight = net_weight;
    product.toler_weight = toler_weight;
    product.volume = volume;

    await repository.save(product);

    return product;
  }
}

export default UpdateProductService;
