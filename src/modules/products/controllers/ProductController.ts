import { Request, Response } from 'express';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

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
    const service = new ListProductService();
    const products = await service.execute();
    return response.json(products);
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
    const service = new ShowProductService();
    const products = await service.execute({ id });
    return response.json(products);
  }

  /**
   * Controlador responsável por criar um novo produto
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const service = new CreateProductService();
    const product = await service.execute({ name, price, quantity });
    return response.json(product);
  }

  /**
   * Controlador responsável por atualizar a informação de um produto
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async update(request: Request, response: Response): Promise<Response> {
    const { id, name, price, quantity } = request.body;
    const service = new UpdateProductService();
    const product = await service.execute({ id, name, price, quantity });
    return response.json(product);
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
    const service = new DeleteProductService();
    await service.execute({ id });
    return response.json({});
  }
}

export default ProductController;
