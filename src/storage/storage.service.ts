import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {
  // TODO: He creado este servicio que es donde pondria los datos y las operaciones de leer, escribir la "data".
  // Este servicio intenta actuar como driver para abstraer el Sercivio del Blog de los datos en si
  // getData, setData o incluso hablar con la DB para leer i escribir los datos

  postsData = [
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

  getPosts() {
    return this.postsData;
  }

  setPosts(
    data: Array<{ userId: number; id: number; title: string; body: string }>,
  ) {
    this.postsData = data;
  }
}
