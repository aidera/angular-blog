import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Post } from 'src/app/shared/models/Post';
import {PostsService} from '../../../shared/services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      postTitle: new FormControl(null, Validators.required),
      postText: new FormControl(null, Validators.required),
      postAuthor: new FormControl(null, Validators.required),
    });
  }

  public submit(): void {
    console.log(this.form);
    if (!this.form.invalid){
      const post: Post = {
        title: this.form.value.postTitle,
        text: this.form.value.postText,
        author: this.form.value.postAuthor,
        date: new Date(),
      };

      this.postsService.create(post).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/admin', 'dashboard']);
      });
    }
  }

}
