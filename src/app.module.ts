import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';
import { StorageService } from './storage/storage.service';
import { UsersService } from './users/users.service';
import { CommentsService } from './comments/comments.service';

@Module({
  imports: [],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService, StorageService, UsersService, CommentsService],
})
export class AppModule {}
