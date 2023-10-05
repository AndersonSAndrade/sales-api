import { Request, Response } from 'express';
import SendForgotPasswordService from '../services/SendForgotPasswordService';

class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const service = new SendForgotPasswordService();
    const { email } = request.body;

    await service.execute({ email });

    return response.status(204).json();
  }
}
export default ForgotPasswordController;
