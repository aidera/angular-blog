import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../models/Post';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(posts: Post[], search = ''): Post[] | null {
    if (search === null || !search.trim()) {
      return posts;
    }
    return posts.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
