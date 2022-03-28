import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

    regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    regionActual: string = '';
    paises: Country[] = [];

    constructor(private paisService: PaisService) { }

    seleccionarRegion(region: string){
        if(this.regionActual !== region){
            this.regionActual = region;
            this.buscar();    
        }
    }

    buscar() {
        console.log("buscar")
        this.paises = [];
        this.paisService.buscarPorRegion(this.regionActual)
        .subscribe({
            next: (res) => {
                this.paises = res;
            },
            error: (error) => {
                this.paises = [];
            }
        });
    }

}
