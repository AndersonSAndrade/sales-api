import { getCustomRepository } from 'typeorm';
import { Products } from '../typeorm/entities/Products';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Products[]> {
    const repository = getCustomRepository(ProductRepository);

    const products = await repository.find();

    return products;
  }
}

export default ListProductService;
