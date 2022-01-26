import { Injectable } from '@nestjs/common';
import { StorageService } from 'src/storage/storage.service';

@Injectable()
export class BlogService {
  constructor(private storageService: StorageService) {}
  getAll(): Array<object> {
    const data = this.storageService.getPosts();
    return data;
  }
  getPost(postId: number): {
    userId: number;
    id: number;
    title: string;
    body: string;
  } {
    // TODO Aqui uso la comparacion doble pero se tendria que usar la triple
    const data = this.storageService.getPosts();
    const returnPost = data.find((post) => post.id == postId);
    return returnPost;
  }

  addPost(post: {
    userId: number;
    id: number;
    title: string;
    body;
    string;
  }): boolean {
    const data = this.storageService.getPosts();
    const newId = data.length + 1;
    post.id = newId;
    data.push(post);
    this.storageService.setPosts(data);
    return true;
  }

  updatePost(
    id: number,
    post: {
      userId: number;
      id: number;
      title: string;
      body;
      string;
    },
  ): boolean {
    const data = this.storageService.getPosts();
    for (let i = 0; i < data.length; ++i) {
      if (data[i].id == id) {
        data[i].userId = post.userId;
        data[i].title = post.title;
        data[i].body = post.body;
        break;
      }
    }
    this.storageService.setPosts(data);
    return true;
  }
}
