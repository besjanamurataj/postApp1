import { Post } from '../../models/post';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  addform: FormGroup;
  post: Post[];
postItem:Post;
  isAddModal: boolean;
  constructor(
    private service: BlogService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private activeModal: NgbActiveModal
  ) {

  }
  ngOnInit(): void {

    // this.addform = this.formBuilder.group({
    //   title: ["", Validators.required],
    //   body: ["", Validators.required],



  }
  save(){
    if(this.postItem.id){
    this.createPost();
    }
  }
  createPost() {
   this.service.create(this.postItem).subscribe(res =>{
   });


  }
 update(p)

  decline() {
    this.activeModal.close(false);
  }

  accept() {
    this.activeModal.close(true);
  }

  dismiss() {
    this.activeModal.dismiss();
  }
   getPosts(){
     this.service.get().subscribe(data=>{
       console.log(data);
     })
   }
}
