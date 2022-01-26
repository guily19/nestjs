import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  getComents(postId: number): Array<object> {
    // TODO Este metodo devolveria los comentarios de un post en concreto
    return [];
  }
}
