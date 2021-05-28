
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 posts$ :Post[];
 users$ = [];

  constructor(private service:BlogService) { }

  ngOnInit(): void {
  this.getPosts();
  this.getUsers();
  }
getPosts(){
  return this.service.get().subscribe(
    data => {
      this.posts$ = data;
      console.log(data);
    })
}
getUsers() {
  return this.service.getUsers().subscribe((data) => {
    this.users$ = data;
    console.log(this.users$);
  });
}

}
