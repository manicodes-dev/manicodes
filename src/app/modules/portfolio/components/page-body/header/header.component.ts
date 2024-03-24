import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  @Input() isFromBlog:any;

  showMenus:boolean=true;
  constructor(private router:Router) { }


  ngOnChanges(changes: SimpleChanges): void {
      
  }

  sideBar:boolean = false;
  ngOnInit(): void {
    if(this.isFromBlog){
      this.showMenus = false;
    } else {
      this.showMenus = true;
    }
  }

  toggle(){
    this.sideBar = !this.sideBar;
  }

  navigatePage(id:any, isSideBar:boolean) {
    if(isSideBar) {
      this.sideBar = !this.sideBar;
    }
    document.getElementById(id)?.scrollIntoView();
  }

  navigateToHome(){
    this.router.navigate(['../']);
  }

}
