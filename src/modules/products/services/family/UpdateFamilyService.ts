import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import { ProductFamilyRepository } from '@modules/products/typeorm/repositories/ProductsFamilyRepository';
import ProductsFamily from '@modules/products/typeorm/entities/ProductFamily';

interface IRequest {
  id: string;
  name: string;
}

class UpdateFamilyService {
  public async execute({ id, name }: IRequest): Promise<ProductsFamily> {
    const repository = getCustomRepository(ProductFamilyRepository);

    const family = await repository.findOne(id);

    if (!family) {
      throw new AppError('O Produto não existe no sistema', 404);
    }

    const familyExsists = await repository.findByName(name);
    if (familyExsists && name !== family.name) {
      throw new AppError(
        `Já existe um produto com este nome => ${familyExsists.name}`,
        400,
      );
    }

    family.name = name;

    await repository.save(family);

    return family;
  }
}

export default UpdateFamilyService;
