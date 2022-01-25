import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  //He puesto aqui el objeto data para simplificar en tiempo pero los datos no irian aqui sino en otro servicio (Storage).
  // No he movido los datos de sitio dado que he llegado a 1 hora de development y no queria sonbrepasar el tiempo
  data = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    },
  ];

  getAll(): Array<object> {
    return this.data;
  }
  getPost(postId: number): object {
    // TODO

    const returnPost = this.data.find((post) => post.id == postId);
    return returnPost;
  }

  addPost(post: {
    userId: number;
    id: number;
    title: string;
    body;
    string;
  }): boolean {
    const newId = this.data.length + 1;
    post.id = newId;
    this.data.push(post);
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
    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i].id == id) {
        this.data[i].userId = post.userId;
        this.data[i].title = post.title;
        this.data[i].body = post.body;
        break;
      }
    }
    return true;
  }
}
