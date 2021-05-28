import { Post } from './../../models/post';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post :Post;
  @Input() user:User
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {}
  details(){
    console.log(this.post.id);
    console.log(this.user.id)
    // this.router.navigateByUrl('/details');
  }
}
