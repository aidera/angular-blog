import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostsService} from '../../../shared/services/posts.service';
import {switchMap} from 'rxjs/operators';
import {Post} from '../../../shared/models/Post';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public postsService: PostsService,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      })
      ).subscribe((post: Post) => {
        this.post = post;
        this.form = new FormGroup({
          postTitle: new FormControl(post.title, Validators.required),
          postText: new FormControl(post.text, Validators.required)
        });
    });

  }

  submit(): void {
    if (!this.form.invalid) {
      this.postsService.update({
        ...this.post,
        text: this.form.value.postText,
        title: this.form.value.postTitle,
      }).subscribe(() => {
        this.form.reset();
        this.alertService.success('Post updated');
        this.router.navigate(['/admin', 'dashboard']);
      });
    }
  }
}
