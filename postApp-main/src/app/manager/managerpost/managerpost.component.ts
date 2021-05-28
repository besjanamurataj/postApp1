import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddBlogComponent } from 'src/app/manager/add-blog/add-blog.component';
import { BlogService } from 'src/app/services/blog.service';
import { ConfirmationService } from 'src/app/components/confirmation/confirmation.service';


@Component({
  selector: 'app-managerpost',
  templateUrl: './managerpost.component.html',
  styleUrls: ['./managerpost.component.css'],
})
export class ManagerpostComponent implements OnInit {
  posts: Post[] = [];
  id:string;
  constructor(
    private service: BlogService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private confirmationService: ConfirmationService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.get().subscribe((posts) => (this.posts = posts));
  }
  openConfirm(item) {
    console.log(item);
    this.confirmationService
      .confirm('Confirmation', 'Are u sure to delete')
      .then((confirmed) => {
        if (confirmed) {
          this.deletePost(item);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }
  deletePost(item) {
    const index = this.posts.indexOf(item);
    console.log(index);
    this.service.delete(item.id).subscribe((res) => {
      this.posts.splice(index, 1);
    });
    console.log(this.posts);
  }
  trackByFn(_index, blog) {
    return blog.id;
  }
  openModal() {
    this.modalService.open(AddBlogComponent);
    console.log();
  }
}
