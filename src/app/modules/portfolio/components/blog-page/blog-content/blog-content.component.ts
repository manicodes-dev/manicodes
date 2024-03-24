import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";
// import { HighlightJS } from 'ngx-highlightjs';
@Component({
    selector: 'app-blog-content',
    templateUrl: 'blog-content.component.html',
    styleUrls: ['blog-content.component.scss']
})
export class BlogContent implements OnChanges {

    heading: string | undefined;
    content: any;
    code = `<h1>This is some HTML code</h1>
    <p>It will be highlighted by ngx-highlightjs</p>`
    @Input() blogContent: any;

    // constructor(private hljs: HighlightJS, private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.blogContent){
            this.content = this.blogContent.content.html;
            this.heading = this.blogContent.title;
        }
    }

    ngAfterViewInit() {
        // const codeBlocks = this.elRef.nativeElement.querySelectorAll('code');
        // codeBlocks.forEach((codeBlock: HTMLElement) => {
        // });
    }

}