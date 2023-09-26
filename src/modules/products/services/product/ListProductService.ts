import { getCustomRepository } from 'typeorm';
import Products from '@modules/products/typeorm/entities/Products';
import { ProductRepository } from '@modules/products/typeorm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Products[]> {
    const repository = getCustomRepository(ProductRepository);

    const products = await repository.find();

    return products;
  }
}

export default ListProductService;
