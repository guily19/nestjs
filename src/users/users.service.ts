import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // TODO añadir mas endpoint como  getUser que devolviera la lista de usuarios del blog
  // los datos se pedirian al servicio storage que por su parte se comunicaria con el driver de datos

  getUserByPost(postId: number): object {
    // TODO Este metodo devolveria la informacion del usuario del post
    return {};
  }
}
