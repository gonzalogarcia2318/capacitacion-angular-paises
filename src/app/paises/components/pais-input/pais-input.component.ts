import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {

    busqueda: string = '';

    @Output() onBuscar: EventEmitter<string> = new EventEmitter();

    @Output() onBuscarDebounce: EventEmitter<string> = new EventEmitter();

    @Input() placeholder: string = '';

    debouncer: Subject<string> = new Subject();

    constructor() { }

    ngOnInit() {
        this.debouncer
            .pipe(
                debounceTime(300)
            )
            .subscribe(value => {
            console.log("debouncer", value)
            this.onBuscarDebounce.emit(value);
        })
    }

    buscar() {
        this.onBuscar.emit(this.busqueda);
    }

    onBuscarInput(){
        this.debouncer.next(this.busqueda)
    }

}
