import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateUserAvatarService();
    const id = request.user.id;
    const avatar = request.file?.fieldname as string;
    const user = await service.execute({
      id: id,
      avatar: avatar,
    });
    return response.json(user);
  }
}
export default UserAvatarController;
