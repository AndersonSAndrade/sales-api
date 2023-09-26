import { EntityRepository, Repository } from 'typeorm';
import ProductsFamily from '../entities/ProductFamily';

/**
 * @author Anderson S. Andrade
 */
@EntityRepository(ProductsFamily)
export class ProductFamilyRepository extends Repository<ProductsFamily> {
  public async findByName(name: string): Promise<ProductsFamily | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}
