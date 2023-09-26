import ProductsFamily from '@modules/products/typeorm/entities/ProductFamily';
import { ProductFamilyRepository } from '@modules/products/typeorm/repositories/ProductsFamilyRepository';
import { getCustomRepository } from 'typeorm';

class ListFamilyService {
  public async execute(): Promise<ProductsFamily[]> {
    const repository = getCustomRepository(ProductFamilyRepository);

    const familys = await repository.find();

    return familys;
  }
}

export default ListFamilyService;
