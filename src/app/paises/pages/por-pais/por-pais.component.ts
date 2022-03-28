import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

    error: string = '';
    busqueda: string = '';
    paises: Country[] = [];
    sugerencias: Country[] = [];
    mostrarSugerencias: boolean = false;

    constructor(private paisService: PaisService) { }

    buscar(busqueda: string) {
        this.paisService.buscarPorPais(busqueda)
            .subscribe({
                next: (res) => {
                    console.log(res)
                    this.paises = res;
                    this.error = '';
                },
                error: (error) => {
                    this.error = `No se encontro ningun pais con el termino '${busqueda}'`;
                    this.paises = [];
                }
            });
    }

    sugerirResultados(busqueda: string) {
        this.error = '';
        this.busqueda = busqueda;
        this.mostrarSugerencias = true;
        // 
        this.paisService.buscarPaisesParaSugerir(busqueda)
            .subscribe({
                next: res => this.sugerencias = res.slice(0, 5),
                error: error => this.sugerencias = []
            })
    }

    verListaPorBusqueda(busqueda: string) {
        this.mostrarSugerencias = false;
        this.buscar(busqueda);
    }
}
