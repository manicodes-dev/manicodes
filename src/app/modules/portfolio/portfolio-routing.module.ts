import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageBodyComponent } from "./components/page-body/page-body.component";
import { BlogPage } from "./components/blog-page/blog-page.component";

const routes:Routes =[
    {path:'',component:PageBodyComponent},
    {path:'blog/:id', component:BlogPage}
]
@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class PortfolioRoutingModule {
}