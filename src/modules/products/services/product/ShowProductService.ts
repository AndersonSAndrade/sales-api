import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Products from '@modules/products/typeorm/entities/Products';
import { ProductRepository } from '@modules/products/typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Products> {
    const repository = getCustomRepository(ProductRepository);

    const product = await repository.findOne(id);

    if (!product) {
      throw new AppError('O Produto não existe no sistema', 404);
    }

    return product;
  }
}

export default ShowProductService;
