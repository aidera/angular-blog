import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreatePostResponse, Post} from '../models/Post';
import {environment} from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.dbUrl}/posts.json`, post)
      .pipe(map((response: CreatePostResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date),
        } as Post;
      }));
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.dbUrl}/posts.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
      }));
  }
}
