import { Module } from '@nestjs/common';
import { StorageService } from 'src/storage/storage.service';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService, StorageService],
})
export class BlogModule {}
