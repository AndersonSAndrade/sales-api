import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import ListUserService from '../services/ListUserService';
import ShowUserService from '../services/ShowUsertService';
import UpdateUserService from '../services/UpdateUserService';

/**
 * @author Anderson S. Andrade
 * @since 1.0
 */
class UserController {
  /**
   * Controler que lista todos os usuários
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListUserService();
    const products = await service.execute();
    return response.json(products);
  }

  /**
   * Controlador responsavel por lista um unico usuário
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const service = new ShowUserService();
    const products = await service.execute({ id });
    return response.json(products);
  }

  /**
   * Controlador responsável por criar um novo usuário
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async create(request: Request, response: Response): Promise<Response> {
    const { firstname, lastname, email, password, avatar, phone, biography } =
      request.body;
    const service = new CreateUserService();
    const user = await service.execute({
      firstname,
      lastname,
      email,
      password,
      avatar,
      phone,
      biography,
    });
    return response.json(user);
  }

  /**
   * Controlador responsável por atualizar a informação de um usuário
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async update(request: Request, response: Response): Promise<Response> {
    const {
      id,
      firstname,
      lastname,
      email,
      password,
      avatar,
      phone,
      biography,
    } = request.body;
    const service = new UpdateUserService();
    const user = await service.execute({
      id,
      firstname,
      lastname,
      email,
      password,
      avatar,
      phone,
      biography,
    });
    return response.json(user);
  }

  /**
   * Controlador responsável por deletar o usuário selecionado
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const service = new DeleteUserService();
    await service.execute({ id });
    return response.json({});
  }
}

export default UserController;
