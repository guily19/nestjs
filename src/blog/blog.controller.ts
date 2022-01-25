import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly BlogService: BlogService) {}

  @Get(':postId')
  getPost(@Param('postId') postId: number): object {
    return this.BlogService.getPost(postId);
  }

  @Get()
  getAll(): object {
    return this.BlogService.getAll();
  }

  @Post()
  addPost(@Body() body): boolean {
    const newPost: any = body;
    return this.BlogService.addPost(newPost);
  }

  @Put(':postId')
  updatePost(@Param('postId') postId: number, @Body() body): boolean {
    const newPost: any = body;
    console.log('postId', postId);
    return this.BlogService.updatePost(postId, newPost);
  }
}
