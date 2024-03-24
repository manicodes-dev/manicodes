import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Apollo, gql } from 'apollo-angular';

@Component({
    selector: 'app-blogs',
    templateUrl: 'blogs.component.html',
    styleUrls: ['blogs.component.scss']
})
export class BlogsComponent implements OnInit {
    
    blogs: any[] = [];

    constructor(private apollo: Apollo, private router:Router) {

    }

    ngOnInit() {
        this.apollo
            .watchQuery({
                query: gql`
                query Publication {
                    publication(host: "manicodesblog.hashnode.dev") {
                      isTeam
                      title
                      posts(first: 10) {
                        edges {
                          node {
                            id
                            title
                            brief
                            publishedAt
                            readTimeInMinutes
                            coverImage {
                                url
                            }
                          }
                        }
                      }
                    }
                  }
        `,
            })
            .valueChanges.subscribe((result: any) => {
                console.log(result);
                if (result && result.data) {
                    if (result.data?.publication?.posts?.edges) {
                        let edges = result.data?.publication?.posts?.edges;
                        this.blogs = edges.map((blog: { node: {id:any, title: any; brief: any; coverImage: { url: any; }; publishedAt: string | number | Date; readTimeInMinutes: any; }; }) => {
                            return {
                                id: blog.node.id,
                                title :  blog.node.title,
                                brief :  blog.node.brief,
                                image : blog.node.coverImage ? blog.node.coverImage.url : "",
                                tag:'Web',
                                postedDate : new Date(blog.node.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  }),
                                readTime : `${blog.node.readTimeInMinutes} min read`,
                            }
                        })
                    }
                }
            });
    }


    // blogs = [{
    //     "title": "Headless post test",
    //     "brief": "This is for testing the headless CMS of hashnode",
    //     "image": "/assets/images/blog1.jpg",
    //     "tag":'Mani',
    //     "postedDate":'21 October 2022',
    //     "readTime":"3 min read"
    // },{
    //     "title": "Headless post test",
    //     "brief": "This is for testing the headless CMS of hashnode",
    //     "image": "/assets/images/blog1.jpg",
    //     "tag":'Mani',
    //     "postedDate":'21 October 2022',
    //     "readTime":"3 min read"
    // },{
    //     "title": "Headless post test",
    //     "brief": "This is for testing the headless CMS of hashnode",
    //     "image": "/assets/images/blog1.jpg",
    //     "tag":'Mani',
    //     "postedDate":'21 October 2022',
    //     "readTime":"3 min read"
    // },{
    //     "title": "Headless post test",
    //     "brief": "This is for testing the headless CMS of hashnode",
    //     "image": "/assets/images/blog1.jpg",
    //     "tag":'Mani',
    //     "postedDate":'21 October 2022',
    //     "readTime":"3 min read"
    // }];


    navigateToBlog(id:string){
        this.router.navigate(['blog', id]);
    }
    
}