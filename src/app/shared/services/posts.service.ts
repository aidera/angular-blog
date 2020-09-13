import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreatePostResponse, Post} from '../models/Post';
import {environment} from '../../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  fetching = false;

  constructor(private http: HttpClient) {
  }

  create(post: Post): Observable<Post> {
    this.fetching = true;
    return this.http.post(`${environment.dbUrl}/posts.json`, post)
      .pipe(
        map((response: CreatePostResponse) => {
          return {
            ...post,
            id: response.name,
            date: new Date(post.date),
          } as Post;
        }),
        tap(() => {
          this.fetching = false;
        })
      );
  }

  getAll(): Observable<Post[]> {
    this.fetching = true;
    return this.http.get(`${environment.dbUrl}/posts.json`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
                ...response[key],
                id: key,
                date: new Date(response[key].date)
              })
            );
        }),
        tap(() => {
          this.fetching = false;
        }));
  }

  getById(id: string): Observable<Post> {
    this.fetching = true;
    return this.http.get<Post>(`${environment.dbUrl}/posts/${id}.json`)
      .pipe(
        map((post: Post) => {
          return {
            ...post,
            id,
            date: new Date(post.date),
          } as Post;
        }),
        tap(() => {
          this.fetching = false;
        })
      );
  }

  remove(id: string): Observable<void> {
    this.fetching = true;
    return this.http.delete<void>(`${environment.dbUrl}/posts/${id}.json`)
      .pipe(tap(() => {
        this.fetching = false;
      }));
  }

  update(post: Post): Observable<Post> {
    console.log('update start');
    console.log(post);
    this.fetching = true;
    return this.http.patch<Post>(`${environment.dbUrl}/posts/${post.id}.json`, post)
      .pipe(tap(() => {
        console.log('update tap');
        this.fetching = false;
      }));
  }
}
