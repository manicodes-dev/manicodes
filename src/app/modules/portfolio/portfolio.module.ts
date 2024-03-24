import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeaderComponent } from './components/page-body/header/header.component';
import { IntroductionComponent } from './components/page-body/introduction/introduction.component';
import { AboutMeComponent } from './components/page-body/about-me/about-me.component';
import { ContactComponent } from './components/page-body/contact/contact.component';
import { FooterComponent } from './components/page-body/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MessageService } from './services/message.service';
import { ConnectComponent } from './components/page-body/connect/connect.component';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { BlogsComponent } from './components/page-body/blogs/blogs.component';
import { BlogPage } from './components/blog-page/blog-page.component';
import { BlogContent } from './components/blog-page/blog-content/blog-content.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';



@NgModule({
  declarations: [PageBodyComponent, HeaderComponent, IntroductionComponent, AboutMeComponent, ContactComponent, FooterComponent, ConnectComponent, BlogsComponent, BlogPage, BlogContent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    ApolloModule,
    HighlightModule,
    HttpClientModule,
  ],
  providers: [MessageService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://gql.hashnode.com',
          }),
        };
      },
      deps: [HttpLink],
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]
})
export class PortfolioModule { }
