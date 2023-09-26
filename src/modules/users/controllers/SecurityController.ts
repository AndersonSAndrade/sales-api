import { Request, Response } from 'express';
import CreateSessionService from '../services/security/CreateSessionService';

/**
 * @author Anderson S. Andrade
 * @since 1.0
 */
class SecurityController {
  /**
   * Controlador responsável pelo acesso do usuário
   * @param request
   * @param response
   * @returns Response
   * @author Anderson S. Andrade
   */
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const service = new CreateSessionService();
    const user = await service.execute({
      email,
      password,
    });
    return response.json(user);
  }
}
export default SecurityController;
