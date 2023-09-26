import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProductsFamily from '@modules/products/typeorm/entities/ProductFamily';
import { ProductFamilyRepository } from '@modules/products/typeorm/repositories/ProductsFamilyRepository';

interface IRequest {
  id: string;
}

class ShowFamilyService {
  public async execute({ id }: IRequest): Promise<ProductsFamily> {
    const repository = getCustomRepository(ProductFamilyRepository);

    const family = await repository.findOne(id);

    if (!family) {
      throw new AppError('A Familia de Produto não existe no sistema', 404);
    }

    return family;
  }
}

export default ShowFamilyService;
