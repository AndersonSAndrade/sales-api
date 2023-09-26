import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ProductsFamily from '@modules/products/typeorm/entities/ProductFamily';
import { ProductFamilyRepository } from '@modules/products/typeorm/repositories/ProductsFamilyRepository';

interface IRequest {
  name: string;
}

class CreateFamilyService {
  public async execute({ name }: IRequest): Promise<ProductsFamily | AppError> {
    const repository = getCustomRepository(ProductFamilyRepository);

    const familyExsists = await repository.findByName(name);
    if (familyExsists) {
      throw new AppError(`Já existe uma familia de  produto com este nome`);
    }

    const family = repository.create({
      name,
    });

    await repository.save(family);

    return family;
  }
}

export default CreateFamilyService;
