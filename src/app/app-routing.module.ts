import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./paises/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./paises/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./paises/pages/por-region/por-region.component";
import { VistaPaisComponent } from "./paises/pages/vista-pais/vista-pais.component";

const routes: Routes = [
    {path: '', component: PorPaisComponent, pathMatch: 'full'},
    {path: 'region', component: PorRegionComponent},
    {path: 'capital', component: PorCapitalComponent},
    {path: 'pais/:id', component: VistaPaisComponent},
    {path: '**', redirectTo: ''},


]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule{

}