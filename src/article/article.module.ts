import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { UsersService } from 'src/users/users.service';
import { BlogService } from 'src/blog/blog.service';
import { CommentsService } from 'src/comments/comments.service';

@Module({
  providers: [ArticleService, UsersService, BlogService, CommentsService],
  controllers: [ArticleController],
})
export class ArticleModule {}
