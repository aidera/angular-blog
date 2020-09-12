import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import { Post } from 'src/app/shared/models/Post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['index', 'title', 'author', 'date', 'text', 'actions'];

  posts: Post[] = [];
  postSubscription: Subscription;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postSubscription = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  remove(id: string): void {

  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
