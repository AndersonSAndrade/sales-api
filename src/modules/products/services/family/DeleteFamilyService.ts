import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import { ProductFamilyRepository } from '@modules/products/typeorm/repositories/ProductsFamilyRepository';

interface IRequest {
  id: string;
}

class DeleteFamilyService {
  public async execute({ id }: IRequest): Promise<void> {
    const repository = getCustomRepository(ProductFamilyRepository);

    const family = await repository.findOne(id);

    if (!family) {
      throw new AppError('A Familia não existe no sistema', 404);
    }

    await repository.remove(family);
  }
}

export default DeleteFamilyService;
