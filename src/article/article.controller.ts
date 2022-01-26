import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from 'src/blog/blog.service';
import { CommentsService } from 'src/comments/comments.service';
import { UsersService } from 'src/users/users.service';

@Controller('article')
export class ArticleController {
  constructor(
    private readonly BlogService: BlogService,
    private readonly UserService: UsersService,
    private readonly CommentsServices: CommentsService,
  ) {}

  @Get(':postId')
  getArticle(@Param('postId') postId: number): object {
    const post = this.BlogService.getPost(postId);
    const comments = this.CommentsServices.getComents(postId);
    const userId = post ? post.userId : -1;
    const userInfo = this.UserService.getUser(userId);
    const article = {
      post: { ...post },
      comments: { ...comments },
      userInformation: { ...userInfo },
    };
    return article;
  }
}
