import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Apollo,gql } from "apollo-angular";

@Component({
    selector:'app-blogpage',
    templateUrl:'blog-page.component.html',
    styleUrls:['blog-page.component.scss']
})
export class BlogPage implements OnInit {
    blogId:string | undefined;
    blogContent:any;
    constructor(private activatedRoute:ActivatedRoute, private apollo: Apollo){

    }

    ngOnInit(): void {
        this.blogId = this.activatedRoute.snapshot.params['id'];
        this.apollo
            .watchQuery({
                query: gql`
                query Post {
                    post(id: "${this.blogId}") {
                      title
                            brief
                            url
                            content {
                              markdown
                              html
                              text
                            }
                    }
                  }
        `,
            }).valueChanges.subscribe((result: any) => {
                console.log(result);
                if(result?.data?.post) {
                    this.blogContent = result.data.post;
                }
            });
    }

}