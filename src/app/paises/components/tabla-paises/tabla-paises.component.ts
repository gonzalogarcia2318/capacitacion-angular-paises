import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-tabla-paises',
    templateUrl: './tabla-paises.component.html',
    styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent {

    @Input() paises: Country[] = [];

    constructor() { }
}
