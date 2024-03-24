import { Component } from "@angular/core";


@Component({
    selector: "app-connect",
    templateUrl: "./connect.component.html",
    styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {
    links = [
        {
            name: "YouTube",
            url: "https://tapthe.link/AF79LwUU7R",
            icon: 'youtube.svg'
        },
        {
            name: "Instagram",
            url: "https://tapthe.link/5uGLrOBVue",
            icon: 'instagram.svg'
        },
        {
            name: "Github",
            url: "https://tapthe.link/6nd8DC4ngG",
            icon: 'github.svg'
        },
        {
            name: "LinkedIn",
            url: "https://tapthe.link/P2Aamhj122",
            icon: 'linkedin.svg'
        },
        {
            name: "Twitter",
            url: "https://twitter.com/iam___mani",
            icon: 'twitter.svg'
        }
    ];
}