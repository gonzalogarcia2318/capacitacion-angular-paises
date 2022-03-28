import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-capital',
    templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

    error: string = '';
    paises: Country[] = [];

    constructor(private paisService: PaisService) { }

    buscar(busqueda: string) {
        this.paisService.buscarPorCapital(busqueda)
            .subscribe({
                next: (res) => {
                    this.paises = res;
                    this.error = '';
                },
                error: (error) => {
                    this.error = `No se encontro ningun pais con el termino '${busqueda}'`;
                    this.paises = [];
                }
            });
    }

}
