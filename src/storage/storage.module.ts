import { Module } from '@nestjs/common';
import { BlogService } from 'src/blog/blog.service';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';

@Module({
  imports: [],
  controllers: [StorageController],
  providers: [StorageService, BlogService],
  exports: [StorageService],
})
export class StorageModule {}
