import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VistaPaisComponent } from './pages/vista-pais/vista-pais.component';
import { RouterModule } from '@angular/router';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
    declarations: [
        PorCapitalComponent,
        PorPaisComponent,
        PorRegionComponent,
        VistaPaisComponent,
        TablaPaisesComponent,
        PaisInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        PorCapitalComponent,
        PorPaisComponent,
        PorRegionComponent,
        VistaPaisComponent
    ]
})
export class PaisesModule { }
