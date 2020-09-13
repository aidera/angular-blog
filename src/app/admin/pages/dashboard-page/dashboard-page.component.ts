import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import { Post } from 'src/app/shared/models/Post';
import { Subscription } from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['index', 'title', 'author', 'date', 'text', 'actions'];

  form: FormGroup;
  posts: Post[] = [];

  postSubscription: Subscription;
  removePostSubscription: Subscription;

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(null)
    });

    // Делаем запрос на сервер и грузим все посты
    this.postSubscription = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  remove(id: string): void {
    this.removePostSubscription = this.postsService.remove(id).subscribe(() => {
      this.alertService.success('Post removed');
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }

  ngOnDestroy(): void {
    // При дестрое, убираем подписку Observable
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
    if (this.removePostSubscription) {
      this.removePostSubscription.unsubscribe();
    }
  }

}
