import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-vista-pais',
    templateUrl: './vista-pais.component.html'
})
export class VistaPaisComponent implements OnInit {

    paisId: string = '';
    pais!: Country;

    constructor(private route: ActivatedRoute, private paisService: PaisService) { }

    ngOnInit() {
        // Usando switchMap para que no sea tan largo.
        // Recibe los valores del observable y lo transforma en otro observable (el devuelto por pais service)
        this.route.params.pipe(
            switchMap(params => this.paisService.getPaisByAlphaCode(params['id']))
        ).subscribe(res => {
            this.pais = res;
            console.log(this.pais)
        })

        // Forma normal encadenando observables
        //this.route.params.subscribe(({ id }) => {
        //    this.paisId = id;
        //    this.paisService.getPaisByAlphaCode(this.paisId)
        //    .subscribe(res => {
        //        this.pais = res;
        //        console.log(res)
        //    })
        //})
    }

}
