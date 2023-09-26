import { Request, Response } from 'express';
import ListFamilyService from '../services/family/ListFamilyService';
import ShowFamilyService from '../services/family/ShowFamilyService';
import CreateFamilyService from '../services/family/CreateFamilyService';
import UpdateFamilyService from '../services/family/UpdateFamilyService';
import DeleteFamilyService from '../services/family/DeleteFamilyService';

/**
 * @author Anderson S. Andrade
 * @since 1.0
 */
class ProductController {
  /**
   * Controler que lista todos os Products
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListFamilyService();
    const family = await service.execute();
    return response.json(family);
  }

  /**
   * Controlador responsavel por lista um unico produto
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const service = new ShowFamilyService();
    const family = await service.execute({ id });
    return response.json(family);
  }

  /**
   * Controlador responsável por criar um novo produto
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const service = new CreateFamilyService();
    const family = await service.execute({
      name,
    });
    return response.json(family);
  }

  /**
   * Controlador responsável por atualizar a informação de um produto
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async update(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.body;
    const service = new UpdateFamilyService();
    const family = await service.execute({
      id,
      name,
    });
    return response.json(family);
  }

  /**
   * Controlador responsável por deletar o produto selecionado
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const service = new DeleteFamilyService();
    await service.execute({ id });
    return response.json({});
  }
}

export default ProductController;
